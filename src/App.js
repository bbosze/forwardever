import React, { Component } from 'react';
import {
  Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import GetTime from './components/GetTime';
import Tips from './components/Tips';
import Food from './components/Food';
import Header from './components/Header'
import { history } from './config';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Header />
          <Route path="/gettime">
            <GetTime />
          </Route>
          <Route path="/tippek">
            <Tips />
          </Route>
          <Route path="/etelek">
            <Food />
          </Route>
          <Redirect exact from="/" to="/gettime" />
        </div>
      </ Router>
    );
  }
}

export default App;
