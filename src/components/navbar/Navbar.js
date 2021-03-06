import React from 'react';

import './Navbar.css';

import Toggle from '../utils/toggle/Toggle';

import logo from '../../img/logo.png';

const Navbar = ({ darkMode, toggleHandler }) => (
  <header className='header_area'>
    <div className='main-menu'>
      <nav className='navbar navbar-expand-lg'>
        <a className='navbar-brand' href='#!'>
          <img src={logo} alt='logo' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <div className='mr-auto'></div>
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <a className='nav-link' href='#!'>
                Home <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#!'>
                about
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#!'>
                services
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#!'>
                portfolio
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#!'>
                pages
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#!'>
                blog
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#!'>
                contact
              </a>
            </li>
            <li className='d-flex flex-row align-items-center'>
              <div>☀︎</div>
              <Toggle darkMode={darkMode} toggleHandler={toggleHandler} />
              <div>☾</div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
);

export default Navbar;
