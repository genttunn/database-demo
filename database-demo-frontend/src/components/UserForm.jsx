import React, { Component } from "react";
import firebase from "firebase";
import * as firebaseui from "firebaseui";
class UserForm extends Component {
  render() {
    return (
      <div>
        <main className="m-2">
          <h2>User Info</h2>
          <p>Name: {firebase.auth().currentUser.displayName}</p>
          <p>Email: {firebase.auth().currentUser.email}</p>
          <p>UID: {firebase.auth().currentUser.uid}</p>
          <button
            className="btn btn-success "
            onClick={() => {
              firebase
                .auth()
                .signOut()
                .then(
                  function() {
                    console.log("Signed Out");
                  },
                  function(error) {
                    console.error("Sign Out Error", error);
                  }
                );
            }}
          >
            {" "}
            Log Out
          </button>
        </main>
      </div>
    );
  }
}

export default UserForm;
