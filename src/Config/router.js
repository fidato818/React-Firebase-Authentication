import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Signup from "../Components/Signup";
import Login from "../Components/Login";
import Home from "../Components/Home";

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default class AppRouter extends React.Component {
  constructor() {
    super();
    this.state = {
      users: true
    };
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              {this.state.users && (
                <li>
                  <Link to="/login/">Login</Link>
                </li>
              )}
              {this.state.users && (
                <li>
                  <Link to="/Signup/">Signup</Link>
                </li>
              )}
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/login/" component={Login} />
          <Route path="/signup/" component={Signup} />
        </div>
      </Router>
    );
  }
}
