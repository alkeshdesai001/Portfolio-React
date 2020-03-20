import React from 'react';

import './Service.css';

import services1 from '../../img/services/s1.png';
import services2 from '../../img/services/s2.png';
import services3 from '../../img/services/s3.png';
import services4 from '../../img/services/s4.png';

const Service = ({ darkMode }) => (
  <section className='services-area'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 text-center services-title'>
          <h1 className='text-uppercase title-text'>Services Offers</h1>
          <p className='para'>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour
          </p>
        </div>
      </div>
      <div className='container services-list'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='services'>
              <div className='sevices-img text-center py-4'>
                <img src={services1} alt='Services-1' />
              </div>
              <div className='card-body text-center'>
                <h5 className='card-title text-uppercase font-roboto'>
                  Wp developer
                </h5>
                <p className='card-text text-secondary'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='services'>
              <div className='sevices-img text-center py-4'>
                <img src={services2} alt='Services-2' />
              </div>
              <div className='card-body text-center'>
                <h5 className='card-title text-uppercase font-roboto'>
                  ux/ui desing
                </h5>
                <p className='card-text text-secondary'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='services'>
              <div className='sevices-img text-center py-4'>
                <img src={services3} alt='Services-3' />
              </div>
              <div className='card-body text-center'>
                <h5 className='card-title text-uppercase font-roboto'>
                  web design
                </h5>
                <p className='card-text text-secondary'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='services'>
              <div className='sevices-img text-center py-4'>
                <img src={services4} alt='Services-4' />
              </div>
              <div className='card-body text-center'>
                <h5 className='card-title text-uppercase font-roboto'>
                  seo optimize
                </h5>
                <p className='card-text text-secondary'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Service;
