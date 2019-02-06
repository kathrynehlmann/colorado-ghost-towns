import React, { Component } from 'react';
import './App.css';
import Maps from './Maps.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Maps id="container"/>
        </div>
      </div>
    );
  }
}

export default App;
