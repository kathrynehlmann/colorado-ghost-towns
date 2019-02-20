import React from "react";
import { GeoJSON } from "react-leaflet";
const overpass = require("query-overpass");

export default class GhostTowns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      geojson:undefined
    };
  }

componentDidMount() {
  const query = `[out:json][timeout:25];
                 (
                   way["historic"="ruins"](around:1000000, 39.533489, -107.783302);\
                   relation["historic"="ruins"](around:1000000, 39.533489, -107.783302);
                 );\
                 out body;>;out skel qt;`;
  const options = {
    flatProperties: true,
    overpassUrl: 'https://overpass-api.de/api/interpreter'
  };
  overpass(query, this.dataHandler, options);
}

dataHandler = (error, osmData) => {
  if (!error && osmData.features !== undefined) {
    this.setState({ geojson: osmData });
  }
};

render() {
  return this.state.geojson ? <GeoJSON data={this.state.geojson} /> : null;
  }
}
