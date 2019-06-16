import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }
  render() {
    return (
      <div className="App">
        <header>Links will go here</header>

        <p>React goes here</p>
      </div>
    );
  }
}

const mapStateToProps = ({ arcades }) => ({
  arcades
});

export default connect(
  mapStateToProps,
  {}
)(App);
