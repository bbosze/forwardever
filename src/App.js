import React, { Component } from 'react';
import './App.css';
import GetTime from './components/GetTime'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GetTime />
      </div>
    );
  }
}

export default App;