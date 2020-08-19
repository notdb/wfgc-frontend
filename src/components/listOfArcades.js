import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { connect } from "react-redux";
import { arcadesFetcher } from "../actions";
import ArcadeCard from "./ArcadeCard";

class ListOfArcades extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arcad: []
    };
  }

  componentDidMount() {
    this.props.arcadesFetcher();
  }

  componentDidUpdate() {
    if (this.props.arcades !== this.state.arcad) {
      this.setState({
        ...this.state,
        arcad: this.props.arcades
      });
    }
  }
  render() {
    //console.log(this.state);
    return (
      <div className="arcades-list">
        <p>List of top Arcades:</p>
        {/*
        {this.state.arcad.map(arcade => (
          <div key={arcade.id}>
            <p>{arcade.arcadename}</p>
            <p>{arcade.aracdestreet}</p>
            <p>
              {arcade.arcadetown}, {arcade.arcadestate}
            </p>
            <p>{arcade.arcadezipcode}</p>
          </div>
        ))}
	 */}
        {this.state.arcad.map(arcade => (
          <ArcadeCard arcade={arcade} key={arcade.id} />
        ))}
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
)(ListOfArcades);
