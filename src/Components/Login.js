import React, { Component } from "react";
// import "../styles.css";
import { Button, Form } from "react-bootstrap";
import * as firebase from "firebase";
import configFirebase from "../Config/firebase";
import { db } from "../Config/firebase";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleEmail(e) {
    this.setState({ email: e.target.value });
  }
  handlePassword(e) {
    this.setState({ password: e.target.value });
  }
  handleLogin(e) {
    e.preventDefault();
    alert("success");
    const { name, age, email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Document written with ID: ");
        this.props.history.push("/");
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  }

  render() {
    const { name, age, email, password } = this.state;
    console.log(name);
    console.log(email);
    console.log(age);
    return (
      <div>
        <form onSubmit={this.handleLogin}>
          <label>
            Email:
            <input type="text" value={email} onChange={this.handleEmail} />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={this.handlePassword}
            />
          </label>
          <br />

          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
