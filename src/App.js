// REACT IMPORT
import React from 'react';

// BOOTSTRAP CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// LOCAL CSS
import './App.css';

// IMAGE IMPORT
import logo from './img/logo.png';
import banner from './img/banner/banner-image.png';
import aboutUs from './img/about-us.png';

import services1 from './img/services/s1.png';
import services2 from './img/services/s2.png';
import services3 from './img/services/s3.png';
import services4 from './img/services/s4.png';

import portfolio1 from './img/portfolio/p1.jpg';
import portfolio2 from './img/portfolio/p2.jpg';
import portfolio3 from './img/portfolio/p3.jpg';
import portfolio4 from './img/portfolio/p4.jpg';
import portfolio5 from './img/portfolio/p5.jpg';
import portfolio6 from './img/portfolio/p6.jpg';
import portfolio7 from './img/portfolio/p7.jpg';
import portfolio8 from './img/portfolio/p8.jpg';
import portfolio9 from './img/portfolio/p9.jpg';

import logo1 from './img/brands/logo1.png';
import logo2 from './img/brands/logo2.png';
import logo3 from './img/brands/logo3.png';
import logo4 from './img/brands/logo4.png';
import logo5 from './img/brands/logo5.png';
import logo6 from './img/brands/logo6.png';
import logo7 from './img/brands/logo7.png';
import logo8 from './img/brands/logo8.png';
import logo9 from './img/brands/logo9.png';

import testimonials1 from './img/testimonials/t1.jpg';
import testimonials2 from './img/testimonials/t2.jpg';

// COMPONENTS IMPORT
import Card from './components/Card';

function App() {
  return (
    <div classNameName='App'>
      <header className='header_area'>
        <div className='main-menu'>
          <nav className='navbar navbar-expand-lg navbar-light'>
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
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <main className='site-main'>
        <section className='site-banner'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-md-12 site-title'>
                <h3 className='title-text'>Hey</h3>
                <h1 className='title-text text-uppercase'>I am Akshay</h1>
                <h4 className='title-text text-uppercase'>
                  Senior Wordpress Developer
                </h4>
                <div className='site-buttons'>
                  <div className='d-flex flex-row flex-wrap'>
                    <button
                      type='button'
                      className='btn button primary-button mr-4 text-uppercase'
                    >
                      hire me
                    </button>
                    <button
                      type='button'
                      className='btn button secondary-button text-uppercase'
                    >
                      Get cv
                    </button>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-12 banner-image'>
                <img src={banner} alt='banner-img' className='img-fluid' />
              </div>
            </div>
          </div>
        </section>

        <section className='about-area'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-6 col-md-12'>
                <div className='about-image'>
                  <img src={aboutUs} alt='About us' className='img-fluid' />
                </div>
              </div>
              <div className='col-lg-6 col-md-12 about-title'>
                <h2 className='text-uppercase pt-5'>
                  <span>Let me</span>
                  <span>introduce</span>
                  <span>myself</span>
                </h2>
                <div className='paragraph py-4 w-75'>
                  <p className='para'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error rerum iure obcaecati vel possimus officia maiores
                    perferendis ut! Quos, perspiciatis.
                  </p>
                  <p className='para'>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here
                  </p>
                </div>
                <button
                  type='button'
                  className='btn button primary-button text-uppercase'
                >
                  Download cv
                </button>
              </div>
            </div>
          </div>
        </section>

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
                      <span className='font-roboto py-2'>
                        (+91)-800-555-4986
                      </span>
                    </div>
                  </div>
                  <div className='bg-panel'></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='services-area'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 text-center services-title'>
                <h1 className='text-uppercase title-text'>Services Offers</h1>
                <p className='para'>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour
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
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
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
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
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
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
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
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='project-area'>
          <div className='container'>
            <div className='project-title pb-5'>
              <h1 className='text-uppercase title-h1'>Recently Done Project</h1>
              <h1 className='text-uppercase title-h1'>Quality Work</h1>
            </div>

            <div className='button-group'>
              <button
                type='button'
                className='active'
                id='btn1'
                data-filter='*'
              >
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
                    <a
                      className='test-popup-link'
                      href='./img/portfolio/p1.jpg'
                    >
                      <img
                        src={portfolio1}
                        alt='portfolio-1'
                        className='img-fluid'
                      />
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
                    <a
                      className='test-popup-link'
                      href='./img/portfolio/p2.jpg'
                    >
                      <img
                        src={portfolio2}
                        alt='portfolio-2'
                        className='img-fluid'
                      />
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
                    <a
                      className='test-popup-link'
                      href='./img/portfolio/p3.jpg'
                    >
                      <img
                        src={portfolio3}
                        alt='portfolio-3'
                        className='img-fluid'
                      />
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
                    <a
                      className='test-popup-link'
                      href='./img/portfolio/p4.jpg'
                    >
                      <img
                        src={portfolio4}
                        alt='portfolio-4'
                        className='img-fluid'
                      />
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
                    <a
                      className='test-popup-link'
                      href='./img/portfolio/p5.jpg'
                    >
                      <img
                        src={portfolio5}
                        alt='portfolio-5'
                        className='img-fluid'
                      />
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
                    <a
                      className='test-popup-link'
                      href='./img/portfolio/p6.jpg'
                    >
                      <img
                        src={portfolio6}
                        alt='portfolio-6'
                        className='img-fluid'
                      />
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
                    <a
                      className='test-popup-link'
                      href='./img/portfolio/p7.jpg'
                    >
                      <img
                        src={portfolio7}
                        alt='portfolio-7'
                        className='img-fluid'
                      />
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
                    <a
                      className='test-popup-link'
                      href='./img/portfolio/p8.jpg'
                    >
                      <img
                        src={portfolio8}
                        alt='portfolio-8'
                        className='img-fluid'
                      />
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
                    <a
                      className='test-popup-link'
                      href='./img/portfolio/p9.jpg'
                    >
                      <img
                        src={portfolio9}
                        alt='portfolio-9'
                        className='img-fluid'
                      />
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

        <section className='about-area'>
          <div className='container'>
            <div className='row text-center'>
              <div className='col-12'>
                <div className='about-title'>
                  <h1 className='text-uppercase title-h1'>
                    Client Say about me
                  </h1>
                  <p className='para'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Repellendus, deleniti recusandae. Esse incidunt rem
                    repellendus ab voluptates maxime? Nemo, numquam!
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem architecto consequuntur ratione, obcaecati corrupti
                    deserunt.
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem architecto consequuntur ratione, obcaecati corrupti
                    deserunt.
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem architecto consequuntur ratione, obcaecati corrupti
                    deserunt.
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem architecto consequuntur ratione, obcaecati corrupti
                    deserunt.
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem architecto consequuntur ratione, obcaecati corrupti
                    deserunt.
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem architecto consequuntur ratione, obcaecati corrupti
                    deserunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='subscribe-us-area'>
          <div className='container subscribe'>
            <div className='row'>
              <div className='col-lg-12 text-center subscribe-title'>
                <h4 className='text-uppercase'>Get Update From anywhere</h4>
                <p className='para'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam, consequuntur.
                </p>
              </div>
            </div>
            <div className='d-sm-flex justify-content-center'>
              <form className='w-50'>
                <div className='row d-flex flex-row flex-wrap'>
                  <div className='col input-textbox'>
                    <input
                      type='text'
                      id='txtemail'
                      className='form-control'
                      placeholder='Email'
                    />
                  </div>
                  <div className='col'>
                    <div className='btn-submit'>
                      <button
                        type='submit'
                        className='btn btn-success float-right'
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

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
                Copyright ©2019 All rights reserved | This template is made with
                by
                <a href='#!'>
                  <span style={{ color: '#f1f1f1' }}>Daily Tuition</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* <div className='container'>
        <Card />
      </div> */}
    </div>
  );
}

export default App;
