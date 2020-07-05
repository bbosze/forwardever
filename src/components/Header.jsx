import React, { Component } from 'react';
import { history } from '../config';

class Header extends Component {
  render() {
    return (
      <ul className="Header">
        <li onClick={() => history.push('./gettime')}>maratoni idő számítás</li>
        <li onClick={() => history.push('./tippek')}>futás kezdőknek</li>
        <li onClick={() => history.push('./etelek')}>étkezési tippek</li>
      </ul>
    );
  }
}

export default Header;
