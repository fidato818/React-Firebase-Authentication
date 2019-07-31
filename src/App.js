import React, { Component } from "react";
import "./styles.css";
import Navbar from "./Config/router";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "adnan"
    };
  }
  render() {
    const { name } = this.state;
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}
