import React from "react";
import { Browserrouter as Router, Route, Link } from "react-router-dom";
import { GoogleApiWrapper, Map, InfoWindow, Marker } from "google-maps-react";

export class GoogMaps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  geoTester = () => {
    const geocoder = new this.props.google.maps.Geocoder();
    let cb = (testArray, bigStatus) => {
      console.log(testArray[0].geometry.bounds.Ta.g);
      console.log(testArray[0].geometry.bounds.Ya.g);
      console.log(bigStatus);

      /*
      return (
        this.props.google.maps.GeocoderResult,
        this.props.google.maps.GeocoderStatus
      );
*/
    };
    geocoder.geocode({ address: "16803" }, cb);
  };

  render() {
    return (
      <div className="gMapsTest">
        {this.geoTester()}
        <Map
          google={this.props.google}
          initialCenter={{
            lat: 55.53,
            lng: 9.4
          }}
          zoom={15}
          onClick={this.onMapClicked}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA8-WP_2PHVxSEDzBrYoHE71ttdgWQ0_XY"
})(GoogMaps);
