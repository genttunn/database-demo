import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigator from "./router/Navigator";
import Firebase from "./router/Firebase";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Firebase />
      </div>
    );
  }
}

export default App;
