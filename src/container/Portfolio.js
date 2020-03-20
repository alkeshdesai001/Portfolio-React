// REACT IMPORT
import React, { useState, useEffect } from 'react';

// COMPONENTS IMPORT
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';
import About from '../components/about/About';
import Brand from '../components/brand/Brand';
import Service from '../components/service/Service';
import Project from '../components/project/Project';
import Client from '../components/client/Client';
import Subscribe from '../components/subscribe/Subscribe';
import Footer from '../components/footer/Footer';

const Portfolio = () => {
  const getPrefColorScheme = () => {
    if (!window.matchMedia) return;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const getInitialMode = () => {
    const isReturningUser = 'dark' in localStorage;
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    const userPrefersDark = getPrefColorScheme();

    if (isReturningUser) {
      return savedMode;
    } else if (userPrefersDark) {
      return true;
    } else {
      return false;
    }
  };

  const [darkMode, setDarkMode] = useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleHandler = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar darkMode={darkMode} toggleHandler={toggleHandler} />
      <main className='site-main'>
        <Banner darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Brand darkMode={darkMode} />
        <Service darkMode={darkMode} />
        <Project darkMode={darkMode} />
        <Client darkMode={darkMode} />
        <Subscribe darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Portfolio;
