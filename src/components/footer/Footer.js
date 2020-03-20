import React from 'react';

import './Footer.css';

import logo from '../../img/logo.png';

const Footer = ({ darkMode }) => (
  <footer className='footer-area'>
    <div className='container'>
      <div className=''>
        <div className='site-logo text-center py-4'>
          <a href='#!'>
            <img src={logo} alt='logo' />
          </a>
        </div>
        <div className='social text-center'>
          <h5 className='text-uppercase'>Follow me</h5>
          <a href='#!'>
            <i className='fab fa-facebook'></i>
          </a>
          <a href='#!'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='#!'>
            <i className='fab fa-youtube'></i>
          </a>
          <a href='#!'>
            <i className='fab fa-twitter'></i>
          </a>
        </div>
        <div className='copyrights text-center'>
          <p className='para'>
            Copyright ©2019 All rights reserved | This template is made with by
            <a href='#!'>
              <span style={{ color: '#f1f1f1' }}>Daily Tuition</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
