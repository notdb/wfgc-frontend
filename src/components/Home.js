import React from "react";
import "../App.css";
import ListOfArcades from "./listOfArcades";
import SearchBar from "./searchBar";
import GoogMaps from "./googMaps";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Gallery from "./BigCaro";

function Home() {
  return (
    <div className="Home">
      <Gallery />
      <section className="bodyThing">
        <SearchBar className="two" />
        <ListOfArcades className="one" />
      </section>
    </div>
  );
}

export default Home;
