import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./css/searchBar.scss";
import "./css/Login.scss";
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
import SearchBar, { reConnect } from "./components/searchBar";
//import GoogMaps from "./components/googMaps";
import Home from "./components/Home";
import Gallery from "./components/BigCaro";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    /*
    this.props.arcadesFetche();
    this.setState({
      arcades: this.props.arcades
    });
    */
    /*
    const script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=";
    script.async = true;

    window.document.body.appendChild(script);
    */
  }
  testFunction = () => {};
  render() {
    this.testFunction();
    return (
      <Router>
        <div className="App">
          <header>
            <ul>
              <NavLink to="/">Where's FGC</NavLink>
              <NavLink to="/login">Login</NavLink>
            </ul>
          </header>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <footer />

          {/*
          <section className="bodyThing">
            <ListOfArcades className="one" />
            {/*
            <div className="two">
              <p>Google maps goes here </p>
            </div>
	     */}
          {/*
            <SearchBar className="two" />
          </section>
          
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
