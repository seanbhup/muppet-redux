import React, { Component } from 'react';
import logo from './spinner9.svg';
import './App.css';
import MuppetList from "./containers/MuppetList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuppetList />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
