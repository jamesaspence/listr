import React from 'react';
import './Header.scss';
import logo from '../../logo.svg';
import { version } from '../../../package.json';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__left">
        <figure className="Header__logoWrap">
          <img src={logo} alt="Listr Logo" className="Header__logo"/>
        </figure>
        <h1 className="Header__logoText">Listr</h1>
        <small className="Header__version">v{version}</small>
      </div>
    </header>
  );
};

export default Header;