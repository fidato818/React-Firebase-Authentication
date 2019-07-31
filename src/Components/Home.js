import React, { Component } from "react";
// import "../styles.css";
import { Button, Form } from "react-bootstrap";
import * as firebase from "firebase";
import configFirebase from "../Config/firebase";
import { db } from "../Config/firebase";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "Adnan",
      user: ""
    };
    // this.logout = this.logout.bind(this)
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("user changed..", user);
        this.setState({
          user: user.email
        });
      }
    });
  }

  render() {
    const logOutUser = () => {
      firebase.auth().signOut();
    };
    const { name, user } = this.state;
    console.log(user);
    console.log(this.props);
    return (
      <div>
        <h1>Hello </h1>
        {user ? (
          <p>
            {user} <button onClick={logOutUser}>Logout</button>
          </p>
        ) : (
          ""
        )}
      </div>
    );
  }
}
