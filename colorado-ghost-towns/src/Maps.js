import React from 'react';
import ReactDOM from 'react-dom';
import {Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

class Maps extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
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
        <Marker position={position}>
          <Popup>
            This is a popup.
          </Popup>
        </Marker>
      </Map>
    )
  }
}

export default Maps
