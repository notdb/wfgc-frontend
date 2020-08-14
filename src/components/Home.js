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

function Home() {
  return (
    <div className="Home">
      <section className="bodyThing">
        <SearchBar className="two" />
        <ListOfArcades className="one" />
      </section>
    </div>
  );
}

export default Home;