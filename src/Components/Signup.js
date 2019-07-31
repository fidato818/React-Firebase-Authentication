import React, { Component } from "react";
// import "../styles.css";
import { Button, Form } from "react-bootstrap";
import * as firebase from "firebase";
import configFirebase from "../Config/firebase";
import { db } from "../Config/firebase";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      age: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }
  handleEmail(e) {
    this.setState({ email: e.target.value });
  }
  handlePassword(e) {
    this.setState({ password: e.target.value });
  }
  handleAge(e) {
    this.setState({ age: e.target.value });
  }
  handleSignUp(e) {
    e.preventDefault();
    alert("success");
    const { name, age, email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        var userId = firebase.auth().currentUser.uid;
        db.collection("users")
          .doc(userId)
          .set({
            name,
            age,
            email,
            password
          })
          .then(() => {
            console.log("Document written with ID: ");
            this.props.history.push("/Login");
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { name, age, email, password } = this.state;
    console.log(name);
    console.log(email);
    console.log(age);
    return (
      <div>
        <form onSubmit={this.handleSignUp}>
          <label>
            Name:
            <input type="text" value={name} onChange={this.handleChange} />
          </label>
          <br />
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
          <label>
            Age:
            <input type="text" value={age} onChange={this.handleAge} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
