import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { connect } from "react-redux";
import { arcadesFetcher } from "./actions";
import ListOfArcades from "./components/listOfArcades";
import Login from "./components/Login";
import SearchBar from "./components/searchBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  /*
  componentDidMount() {
    this.props.arcadesFetcher();
    this.setState({
      arcades: this.props.arcades
    });
  }
*/
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <ul>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/login">Login</NavLink>
              <Route exact path="/login" component={Login} />
            </ul>
          </header>
          <SearchBar />
          <section className="bodyThing">
            <ListOfArcades className="one" />
            <div className="two">
              <p>Google maps goes here </p>
            </div>
          </section>
          {/*
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
	     */}
        </div>
      </Router>
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
