import React from "react";
import { Browserrouter as Router, Route, Link } from "react-router-dom";
import { GoogleApiWrapper, Map, InfoWindow, Marker } from "google-maps-react";

export class GoogMaps extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: "", long: "" };
  }

  geoTester = () => {
    const geocoder = new this.props.google.maps.Geocoder();
    let poo = "";

    let cb = (testy, bigStatus) => {
      //console.log(testy);
      /* fake return
      return (
        this.props.google.maps.GeocoderResult,
        this.props.google.maps.GeocoderStatus,
        testy[0].geometry.viewport.Ta.g,
        testy[0].geometry.viewport.Ya.g
      );
      */
      console.log("SEACH", testy[0].geometry.viewport.Ta.g);
      this.setState({
        ...this.state,
        lat: testy[0].geometry.viewport.Ta.g,
        long: testy[0].geometry.viewport.Ya.g
      });
      console.log(this.state);
      return "foo";
    };
    geocoder.geocode({ address: `${this.props.zipcode}` }, cb);
  };
  componentDidUpdate() {
    if (this.state.lat) {
      this.props.latLng({ lat: this.state.lat, long: this.state.long });
    }
  }

  render() {
    return (
      <div className="gMapsTest">
        <button onClick={this.geoTester}>Test</button>
        {/*
        <Map
          google={this.props.google}
          initialCenter={{
            lat: 55.53,
            lng: 9.4
          }}
          zoom={15}
          onClick={this.onMapClicked}
        />
	     */}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA8-WP_2PHVxSEDzBrYoHE71ttdgWQ0_XY"
})(GoogMaps);
