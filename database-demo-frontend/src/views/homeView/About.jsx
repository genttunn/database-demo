import React, { Component } from "react";
import earth from "../../images/earth.png";
class About extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h2>About Us</h2>
        <main>
          <img src={earth} alt="" style={{ maxWidth: "20%" }} />
          <br />
          <br />
          <p>
            We want to start an environment-friendly and sustainable company
            that will provide a better way for people to stay close on track of
            a healthy diet while raising the awareness to protect the
            environment and encouraging people to cut down on their animal-based
            consumption.
          </p>
          <p>
            At phase 1, the main activities of our start-up will be importing
            organic beans of many kinds such as soybean and coffee bean from
            trusted farmers and manufacturing bean-based, zero-waste food,
            cosmetic, utensils, etc. These products are then sold on our online
            platform and at our stores.
          </p>
        </main>
      </div>
    );
  }
}

export default About;
