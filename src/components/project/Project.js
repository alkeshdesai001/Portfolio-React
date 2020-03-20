import React from 'react';

import './Project.css';

import portfolio1 from '../../img/portfolio/p1.jpg';
import portfolio2 from '../../img/portfolio/p2.jpg';
import portfolio3 from '../../img/portfolio/p3.jpg';
import portfolio4 from '../../img/portfolio/p4.jpg';
import portfolio5 from '../../img/portfolio/p5.jpg';
import portfolio6 from '../../img/portfolio/p6.jpg';
import portfolio7 from '../../img/portfolio/p7.jpg';
import portfolio8 from '../../img/portfolio/p8.jpg';
import portfolio9 from '../../img/portfolio/p9.jpg';

const Project = ({ darkMode }) => (
  <section className='project-area'>
    <div className='container'>
      <div className='project-title pb-5'>
        <h1 className='text-uppercase title-h1'>Recently Done Project</h1>
        <h1 className='text-uppercase title-h1'>Quality Work</h1>
      </div>

      <div className='button-group'>
        <button type='button' className='active' id='btn1' data-filter='*'>
          All
        </button>
        <button type='button' data-filter='.popular'>
          Popular
        </button>
        <button type='button' data-filter='.latest'>
          Latest
        </button>
        <button type='button' data-filter='.following'>
          Following
        </button>
        <button type='button' data-filter='.upcoming'>
          Upcoming
        </button>
      </div>

      <div className='row grid'>
        <div className='col-lg-4 col-md-6 col-sm-12 element-item latest'>
          <div className='our-project'>
            <div className='img'>
              <a className='test-popup-link' href='./img/portfolio/p1.jpg'>
                <img src={portfolio1} alt='portfolio-1' className='img-fluid' />
              </a>
            </div>
            <div className='title py-4'>
              <h4 className='text-uppercase'>Minimul Desing</h4>
              <span className='text-secondary'>Latest, Portfolio</span>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 element-item popular'>
          <div className='our-project'>
            <div className='img'>
              <a className='test-popup-link' href='./img/portfolio/p2.jpg'>
                <img src={portfolio2} alt='portfolio-2' className='img-fluid' />
              </a>
            </div>
            <div className='title py-4'>
              <h4 className='text-uppercase'>Paint Wall</h4>
              <span className='text-secondary'>Popular, Portfolio</span>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 element-item popular'>
          <div className='our-project'>
            <div className='img'>
              <a className='test-popup-link' href='./img/portfolio/p3.jpg'>
                <img src={portfolio3} alt='portfolio-3' className='img-fluid' />
              </a>
            </div>
            <div className='title py-4'>
              <h4 className='text-uppercase'>Female light</h4>
              <span className='text-secondary'>Popular, Portfolio</span>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 element-item upcoming'>
          <div className='our-project'>
            <div className='img'>
              <a className='test-popup-link' href='./img/portfolio/p4.jpg'>
                <img src={portfolio4} alt='portfolio-4' className='img-fluid' />
              </a>
            </div>
            <div className='title py-4'>
              <h4 className='text-uppercase'>Fourth Air</h4>
              <span className='text-secondary'>Upcoming, Portfolio</span>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 element-item upcoming'>
          <div className='our-project'>
            <div className='img'>
              <a className='test-popup-link' href='./img/portfolio/p5.jpg'>
                <img src={portfolio5} alt='portfolio-5' className='img-fluid' />
              </a>
            </div>
            <div className='title py-4'>
              <h4 className='text-uppercase'>Muliple fown</h4>
              <span className='text-secondary'>Upcoming, Portfolio</span>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 element-item following'>
          <div className='our-project'>
            <div className='img'>
              <a className='test-popup-link' href='./img/portfolio/p6.jpg'>
                <img src={portfolio6} alt='portfolio-6' className='img-fluid' />
              </a>
            </div>
            <div className='title py-4'>
              <h4 className='text-uppercase'>Together sign</h4>
              <span className='text-secondary'>Following, Portfolio</span>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 element-item following'>
          <div className='our-project'>
            <div className='img'>
              <a className='test-popup-link' href='./img/portfolio/p7.jpg'>
                <img src={portfolio7} alt='portfolio-7' className='img-fluid' />
              </a>
            </div>
            <div className='title py-4'>
              <h4 className='text-uppercase'>Green Heaven</h4>
              <span className='text-secondary'>Following, Portfolio</span>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 element-item following'>
          <div className='our-project'>
            <div className='img'>
              <a className='test-popup-link' href='./img/portfolio/p8.jpg'>
                <img src={portfolio8} alt='portfolio-8' className='img-fluid' />
              </a>
            </div>
            <div className='title py-4'>
              <h4 className='text-uppercase'>Fly Male</h4>
              <span className='text-secondary'>Following, Portfolio</span>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 element-item upcoming'>
          <div className='our-project'>
            <div className='img'>
              <a className='test-popup-link' href='./img/portfolio/p9.jpg'>
                <img src={portfolio9} alt='portfolio-9' className='img-fluid' />
              </a>
            </div>
            <div className='title py-4'>
              <h4 className='text-uppercase'>Camera Lens</h4>
              <span className='text-secondary'>Upcoming, Portfolio</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Project;
