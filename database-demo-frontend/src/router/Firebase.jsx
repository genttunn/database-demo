import React, { Component } from "react";
import firebase from "firebase";
import * as firebaseui from "firebaseui";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Navigator from "./Navigator";
import { connect } from "react-redux";
import { login, loginUSER } from "../actions/login";

class Firebase extends Component {
  state = {
    signedIn: false,
    userNow: null
  };
  uiConfig = {
    signInFlow: "redirect",
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
    callbacks: { signInSuccess: () => console.log("success!") }
  };
  componentWillMount = () => {
    firebase.initializeApp({
      apiKey: "AIzaSyAXn_DX4SJCgmPzwqnpgrqGJKF4qMJ4nKY",
      authDomain: "database-demo.firebaseapp.com"
    });
  };
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ signedIn: !!user, userNow: user ? user : null });
      this.props.loginLocal(this.state.signedIn);
      if (this.state.signedIn) {
        const customer = {
          firstName: firebase.auth().currentUser.displayName,
          email: firebase.auth().currentUser.email,
          uid: firebase.auth().currentUser.uid
        };
        this.props.loginUserLocal(customer);
      }
      this.props.loginLocal(this.state.signedIn);
    });
  };

  reauthenticate = currentPassword => {
    let user = firebase.auth().currentUser;
    let credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    return user.reauthenticateWithCredential(credential);
  };

  render() {
    return (
      <div className="App">
        <main>
          {this.state.signedIn ? (
            <Navigator updateUser={this.updateUser} />
          ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
        </main>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  loginLocal: status => {
    dispatch(login(status));
  },
  loginUserLocal: customer => {
    dispatch(loginUSER(customer));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Firebase);
