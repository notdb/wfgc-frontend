import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { arcadesFetcher } from "./actions";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      arcades: []
    };
  }

  componentDidMount() {
    this.props.arcadesFetcher();
    this.setState({
      arcades: this.props.arcades
    });
  }

  render() {
    console.log(this.state.arcades);
    return (
      <div className="App">
        <header>Links will go here</header>

        <p>React goes here</p>
        <div className="arcades-list">
          {this.props.arcades.map(arcade => (
            <div key={arcade.id}>
              <p>{arcade.arcadename}</p>
              <p>{arcade.aracdestreet}</p>
              <p>
                {arcade.arcadetown}, {arcade.arcadestate}
              </p>
              <p>{arcade.arcadezipcode}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ arcades, fetching_arcades }) => ({
  arcades,
  fetching_arcades
});

export default connect(
  mapStateToProps,
  { arcadesFetcher }
)(App);
