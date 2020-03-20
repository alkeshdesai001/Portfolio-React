import React from 'react';

import './Client.css';

import testimonials1 from '../../img/testimonials/t1.jpg';
import testimonials2 from '../../img/testimonials/t2.jpg';

const Client = ({ darkMode }) => (
  <section className='about-area'>
    <div className='container'>
      <div className='row text-center'>
        <div className='col-12'>
          <div className='about-title'>
            <h1 className='text-uppercase title-h1'>Client Say about me</h1>
            <p className='para'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus, deleniti recusandae. Esse incidunt rem repellendus ab
              voluptates maxime? Nemo, numquam!
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className='container carousel py-lg-5'>
      <div className='owl-carousel owl-theme'>
        <div className='client row'>
          <div className='col-lg-4 col-md-12 client-img'>
            <img src={testimonials1} alt='img1' className='img-fluid' />
          </div>
          <div className='col-lg-8 col-md-12 about-client'>
            <h4 className='text-uppercase'>John Martin</h4>
            <p className='para'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
              architecto consequuntur ratione, obcaecati corrupti deserunt.
            </p>
          </div>
        </div>
        <div className='client row'>
          <div className='col-lg-4 col-md-12 client-img'>
            <img src={testimonials2} alt='img2' className='img-fluid' />
          </div>
          <div className='col-lg-8 col-md-12 about-client'>
            <h4 className='text-uppercase'>Mac Hill</h4>
            <p className='para'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
              architecto consequuntur ratione, obcaecati corrupti deserunt.
            </p>
          </div>
        </div>
        <div className='client row'>
          <div className='col-lg-4 col-md-12 client-img'>
            <img src={testimonials1} alt='img1' className='img-fluid' />
          </div>
          <div className='col-lg-8 col-md-12 about-client'>
            <h4 className='text-uppercase'>John Martin</h4>
            <p className='para'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
              architecto consequuntur ratione, obcaecati corrupti deserunt.
            </p>
          </div>
        </div>
        <div className='client row'>
          <div className='col-lg-4 col-md-12 client-img'>
            <img src={testimonials2} alt='img2' className='img-fluid' />
          </div>
          <div className='col-lg-8 col-md-12 about-client'>
            <h4 className='text-uppercase'>Mac Hill</h4>
            <p className='para'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
              architecto consequuntur ratione, obcaecati corrupti deserunt.
            </p>
          </div>
        </div>
        <div className='client row'>
          <div className='col-lg-4 col-md-12 client-img'>
            <img src={testimonials1} alt='img1' className='img-fluid' />
          </div>
          <div className='col-lg-8 col-md-12 about-client'>
            <h4 className='text-uppercase'>John Martin</h4>
            <p className='para'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
              architecto consequuntur ratione, obcaecati corrupti deserunt.
            </p>
          </div>
        </div>
        <div className='client row'>
          <div className='col-lg-4 col-md-12 client-img'>
            <img src={testimonials2} alt='img2' className='img-fluid' />
          </div>
          <div className='col-lg-8 col-md-12 about-client'>
            <h4 className='text-uppercase'>Mac Hill</h4>
            <p className='para'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
              architecto consequuntur ratione, obcaecati corrupti deserunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Client;
