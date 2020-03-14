import React from "react";
import { Browserrouter as Router, Route, Link } from "react-router-dom";
import { GoogleApiWrapper } from "google-maps-react";

export class GoogMaps extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="gMapsTest">
        <p>Hello world</p>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA8-WP_2PHVxSEDzBrYoHE71ttdgWQ0_XY"
})(GoogMaps);
