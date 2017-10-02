import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const element = (
  <h1>
    Hello,
  </h1>
);
class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome two React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p> Just some extra text </p>
      </div>
    );
  }
}

export default App;
