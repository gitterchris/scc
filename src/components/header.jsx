import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div id="header-wrapper">
    <div className="container">
      <header id="page-header">
        <h1>
          <a
            id="logo"
            href="/"
          >
            <b>Suniga</b>
            {' '}
            Construction Company
          </a>
        </h1>
        <nav id="nav">
          <ul>
            <li className="current_page_item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/pre-designed">Pre-Designed</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/team">Team</NavLink>
            </li>
            <li>
              <a
                href=""
                className="arrow"
              >
                More
              </a>
              <ul>
                <li>
                  <NavLink to="/clients">Clients</NavLink>
                </li>
                <li>
                  <NavLink to="/certificates">Certificates</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  </div>
);

export default Header;
