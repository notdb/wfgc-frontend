import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { arcadesFetcher } from "../actions";
import GoogMaps from "./googMaps";
import { Loader } from "@googlemaps/js-api-loader";
import ArcadeCard from "./ArcadeCard";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arcade: [],
      zipcode: "",
      filteredArray: [],
      latLng: ""
    };
  }
  componentDidMount() {
    this.props.arcadesFetcher();
    const loader = new Loader({
      apiKey: process.env.REACT_APP_GMAPS_API_KEY,
      version: "weekly",
      libraries: []
    });
    loader.load();
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
    console.log(this.state);
  }

  dmTest = () => {
    const distanceThang = new window.google.maps.DistanceMatrixService();

    let cb = (response, status) => {
      if (status == "OK") {
        console.log(response);
        this.setState({
          ...this.state,
          bigResponse: response
        });
        let arcadesTwo = this.state.arcade.map((arcade, index) => ({
          ...arcade,
          distance: this.state.bigResponse.rows[0].elements[index].distance
            .text,
          value: this.state.bigResponse.rows[0].elements[index].distance.value
        }));
        arcadesTwo.sort((a, b) => a.value - b.value);
        this.setState({
          ...this.state,
          arcadesTwo: arcadesTwo
        });
      }
    };
    const newDistances = this.state.arcade.map(arc => ({
      lat: arc.lat,
      lng: arc.long
    }));
    console.log(newDistances);
    /* { lat: 33.73, lng: -117.87 } */
    console.log(this.state.latLng);
    distanceThang.getDistanceMatrix(
      {
        origins: [this.state.latLng],
        destinations: newDistances,
        travelMode: "DRIVING"
      },
      cb
    );
  };

  initMap = () => {
    const geoCoder = new window.google.maps.Geocoder();
    /*
    let weirdVar;
    let testet;
*/
    let cb = (testy, bigStatus) => {
      if (bigStatus == "OK") {
        this.setState({
          ...this.state,
          latLng: {
            lat: testy[0].geometry.bounds.Ya.i,
            long: testy[0].geometry.bounds.Ua.i
          }
        });
        /*
        weirdVar = "okay";
        testet = testy;
	*/
      }
    };

    geoCoder.geocode({ address: this.state.zipcode }, cb);
    /*
    let testPromise = new Promise((resolve, reject) => {
      if (weirdVar == "okay") {
        console.log(testet);
        resolve("done");
      }
    });

    testPromise.then(foo => console.log(foo));
*/
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  fooPoo = function(event) {
    event.preventDefault();
    let testPromiseBaby = new Promise((resolve, reject) => {
      const geoCoder = new window.google.maps.Geocoder();
      let cb = (testy, bigStatus) => {
        if (bigStatus == "OK") {
          console.log(testy);
          this.setState({
            ...this.state,
            latLng: {
              lat: testy[0].geometry.viewport.Za.i,
              lng: testy[0].geometry.viewport.Va.i
            }
          });
          resolve();
        }
      };
      geoCoder.geocode({ address: this.state.zipcode }, cb);
      /*
      if (this.state.latLng.length !== 0) {
        resolve();
      } else {
,,        reject(Error("not loaded"));
      }
*/
    });
    testPromiseBaby.then(this.dmTest);
    /*
    let somethingSomething = [];
    let truthyy = () => {
      let bigFilter = this.state.arcade.filter(arcad => {
        const tempObject = { lat: arcad.lat, long: arcad.long };
        //console.log(tempObject);
        console.log(this.state.latLng);
        let tempArray = Object.values(tempObject);
        let stateArray = Object.values(this.state.latLng);

        let y = 0;
        for (let i = 0; i < tempArray.length; i++) {
          //console.log(tempArray[i]);
          //console.log(stateArray[i]);
          if (tempArray[i] == stateArray[i]) {
            y++;
          }
        }

        //console.log(y);
        return arcad.arcadezipcode == this.state.zipcode;
      });

      somethingSomething = bigFilter;
      this.setState({
        ...this.state,
        filteredArray: bigFilter
      });
    };
    truthyy();
    console.log(somethingSomething);
    if (truthyy.length !== 0) {
      this.setState({
        ...this.state,
        filteredArray: truthyy
      });
    }
*/
    console.log(this.state.zipcode);
    console.log("FFFFFF");
    console.log(this.state);
    this.setState({ ...this.state, zipcode: "" });
  };

  passIt = poo3 => {
    console.log("GOOG MAPS", poo3);
    console.log(this.state.latLng);
    if (this.state.latLng) {
      console.log("TEST", this.state);
      if (this.state.latLng.lat !== poo3.lat) {
        this.setState({ ...this.state, latLng: poo3 });
      }
    } else {
      console.log("poo");
      this.setState({ ...this.state, latLng: poo3 });
    }
    return poo3;
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
              placeholder="Zipcode"
            />
            <button>Submit!</button>
          </form>
        </div>
        <div className="searchResults">
          <div>Your nearest weeklies:</div>
          {this.state.filteredArray.map(arcade => (
            <div key={arcade.id} className="mapResult">
              <p>{arcade.arcadename}</p>
              <p>{arcade.aracdestreet}</p>
              <p>
                {arcade.arcadetown}, {arcade.arcadestate}
              </p>
              <p>{arcade.arcadezipcode}</p>
            </div>
          ))}
          {this.state.arcadesTwo ? (
            this.state.arcadesTwo.map(arcade => (
              /*
              <div key={arcade.id} className="mapResult">
                <p>{arcade.arcadename}</p>
                <p>{arcade.arcadestreet}</p>
                <p>
                  {arcade.arcadetown}, {arcade.arcadestate}{" "}
                  {arcade.arcadezipcode}
                </p>
                <p>{arcade.distance}</p>
              </div>
		  */
              <ArcadeCard arcade={arcade} />
            ))
          ) : (
            <p />
          )}
        </div>
        {/*<GoogMaps zipcode={this.state.zipcode} latLng={this.passIt} />*/}
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
