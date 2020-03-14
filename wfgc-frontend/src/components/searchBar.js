import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { arcadesFetcher } from "../actions";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arcade: [],
      zipcode: "",
      filteredArray: []
    };
  }
  componentDidMount() {
    this.props.arcadesFetcher();
  }
  componentDidUpdate() {
    if (this.props.arcades !== this.state.arcade) {
      this.setState({
        ...this.state,
        arcade: this.props.arcades
      });
    }
    /*
    if (this.fooPoo !== this.state.filteredArray) {
      this.setState({
        ...this.state,
        filteredArray: this.fooPoo()
      });
    }
*/
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  fooPoo = function(event) {
    event.preventDefault();
    let truthyy = this.state.arcade.filter(arcad => {
      return arcad.arcadezipcode == this.state.zipcode;
    });
    if (truthyy.length !== 0) {
      this.setState({
        ...this.state,
        filteredArray: truthyy
      });
    }
    console.log(this.state.zipcode);
  };

  render() {
    return (
      <div className="searchBar">
        <div className="searchForm">
          Enter Your Zip Code to display arcades near you:
          <form onSubmit={event => this.fooPoo(event)}>
            <input
              type="text"
              name="zipcode"
              value={this.state.zipcode}
              onChange={this.handleChange}
            />
            <button>Submit!</button>
          </form>
        </div>
        <div className="searchResults">
          {this.state.filteredArray.map(arcade => (
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
)(SearchBar);
