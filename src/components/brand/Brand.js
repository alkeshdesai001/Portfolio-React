import React from 'react';

import './Brand.css';

import logo1 from '../../img/brands/logo1.png';
import logo2 from '../../img/brands/logo2.png';
import logo3 from '../../img/brands/logo3.png';
import logo4 from '../../img/brands/logo4.png';
import logo5 from '../../img/brands/logo5.png';
import logo6 from '../../img/brands/logo6.png';
import logo7 from '../../img/brands/logo7.png';
import logo8 from '../../img/brands/logo8.png';
import logo9 from '../../img/brands/logo9.png';

const Brand = ({ darkMode }) => (
  <section className='brand-area'>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-xl-6 col-lg-12 col-md-12'>
          <div className='first-row row'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-brand'>
                <img src={logo1} alt='Brand-1 ' />
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-brand'>
                <img src={logo2} alt='Brand-2 ' />
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-brand'>
                <img src={logo3} alt='Brand-3 ' />
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-brand'>
                <img src={logo4} alt='Brand-4' />
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-brand'>
                <img src={logo5} alt='Brand-5 ' />
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-brand'>
                <img src={logo6} alt='Brand-6' />
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-brand'>
                <img src={logo7} alt='Brand-7 ' />
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-brand'>
                <img src={logo8} alt='Brand-8 ' />
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-brand'>
                <img src={logo9} alt='Brand-9' />
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-6 col-lg-12 col-md-12'>
          <div className='experience-area'>
            <div className='d-flex flex-row years-area'>
              <h2 className='p-3 years'>10</h2>
              <h2>
                <span>Years</span>
                <span>Experience</span>
                <span>Working</span>
              </h2>
            </div>
            <div className='d-flex flex-row flex-wrap call-area'>
              <span>
                <i className='fas fa-phone-alt fa-3x px-3'></i>
              </span>
              <div className='call-now'>
                <a href='#!' className='text-uppercase h4 font-roboto'>
                  Call Now
                </a>
                <span className='font-roboto py-2'>(+91)-800-555-4986</span>
              </div>
            </div>
            <div className='bg-panel'></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Brand;
