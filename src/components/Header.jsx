import React, { Component } from 'react';
import { history } from '../config';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>FORWARD EVER</h2>
        <ul className="Header">
          <li onClick={() => history.push('./gettime')}>maratoni idő számítás</li>
          <li onClick={() => history.push('./tippek')}>futás kezdőknek</li>
          <li onClick={() => history.push('./etelek')}>étkezési tippek</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Header;
