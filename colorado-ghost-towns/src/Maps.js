import React from 'react';
import {Map, TileLayer, Marker } from 'react-leaflet';
// import L from 'leaflet';
// Mandatory styles for leaflet
import 'leaflet/dist/leaflet.css';

import GhostTowns from "./GhostTowns";

class Maps extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: 39.533489,
      lng: -107.783302,
      zoom: 8
    }
  }

render(){
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='http://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png'
        />
        <Marker position={position} />
        <GhostTowns />
      </Map>
    )
  }
}

export default Maps
