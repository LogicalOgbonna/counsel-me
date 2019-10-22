import propTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

// import Header from "../Header";
// import Banner from "../Banner";
// import Footer from "../Footer";
import {Login, Register} from "../Auth/index"
import navLogo from "./img/logo-nav.png";
import logo from "./img/logo.png";
import bg from "./img/parallax-bg.jpg";
import gadgets from "./img/Welcome.PNG";
import "./style.css";

const Landing = ({ isAuthenticated }) => {
  return (
    <div>
      <section class="hero">
        <div class="container text-center">
          <div class="row">
            <div class="col-md-12">
              {/* <a class="hero-brand" href="/" title="Home">
                <img alt="Bell Logo" src={logo} />
              </a> */}
            </div>
          </div>

          <div class="col-md-12">
            <h1>Counsel Me</h1>

            <p class="tagline">
            Introducing a counseling system on area of specialization for post-graduate computer science students.
            </p>
            <a class="btn btn-full" href="#about">
              Get Started Now
            </a>
          </div>
        </div>
      </section>

      <header id="header">
        <div class="container">
          <div id="logo" class="pull-left">
            <a href="/">
              <img src={navLogo} alt="" title="" />
            </a>
          </div>

          <nav id="nav-menu-container">
            <ul class="nav-menu">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <Link to="/login">HOD Login</Link>
              </li>
              <li>
                <Link to="/register">Course Adviser Login</Link>
              </li>
              {/* <li class="menu-has-children">
                <a href="">Drop Down</a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li class="menu-has-children">
                    <a href="#">Drop Down 2</a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 5</a>
                  </li>
                </ul>
              </li> */}
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </nav>
          <nav class="nav social-nav pull-right d-none d-lg-inline">
            <a href="#">
              <i class="fa fa-twitter" />
            </a>{" "}
            <a href="#">
              <i class="fa fa-facebook" />
            </a>{" "}
            <a href="#">
              <i class="fa fa-linkedin" />
            </a>{" "}
            <a href="#">
              <i class="fa fa-envelope" />
            </a>
          </nav>
        </div>
      </header>

      <section class="about mt-4" id="about">
        <div class="container text-center">
          <h2>About Counsel Me</h2>

          <p>
          Counsel Me is project work whose aim is to guide, support and motivate students as they explore their potential and make precise academic choices in order to satisfy students’ needs and comply with academic goals
          </p>

          <div class="row stats-row">
            <div class="stats-col text-center col-md-6 col-sm-6">
              <div class="circle">
                <span class="stats-no" data-toggle="counter-up">
                  27
                </span>{" "}
                Satisfied Students
              </div>
            </div>

            <div class="stats-col text-center col-md-6 col-sm-6">
              <div class="circle">
                <span class="stats-no" data-toggle="counter-up">
                  7
                </span>{" "}
               Areas of Specialization 
              </div>
            </div>

            
          </div>
        </div>
      </section>
      <div
        class="block bg-primary block-pd-lg block-bg-overlay text-center"
        data-bg-img={bg}
        data-settings='{"stellar-background-ratio": 0.6}'
        data-toggle="parallax-bg"
      >
        <h2>Welcome to a Counsel Me</h2>

        <p>
          Advice are given to users like the image below
        </p>
        <img
          alt="Counsel Me - A Advice"
          class="gadgets-img hidden-md-down"
          src={gadgets}
        />
      </div>

     
  

  <section class="features" id="features">
    <div class="container">
      <h2 class="text-center mb-5">
          Features
        </h2>

      <div class="row">
        <div class="feature-col col-lg-4 col-xs-12">
          <div class="card card-block text-center">
            <div>
              <div class="feature-icon">
                <span class="fa fa-rocket"></span>
              </div>
            </div>

            <div>
              <h3>
                  Easy to Use
                </h3>

              <p>
                The simplity of the system makes it easy for users to go through
              </p>
            </div>
          </div>
        </div>

        <div class="feature-col col-lg-4 col-xs-12">
          <div class="card card-block text-center">
            <div>
              <div class="feature-icon">
                <span class="fa fa-envelope"></span>
              </div>
            </div>

            <div>
              <h3>
                  Responsive Layout
                </h3>

              <p>
                The content of the pages are responsive to all devices to cover a wider range of users
              </p>
            </div>
          </div>
        </div>

        <div class="feature-col col-lg-4 col-xs-12">
          <div class="card card-block text-center">
            <div>
              <div class="feature-icon">
                <span class="fa fa-bell"></span>
              </div>
            </div>

            <div>
              <h3 >
                  Good Advice
                </h3>

              <p>
                The system makes good advice for students
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2 class="section-title">Contact Us</h2>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-3 col-md-4">
          <div class="info">
            <div>
              <i class="fa fa-map-marker"></i>
              <p>University of Nigeria<br />Nsukka</p>
            </div>

            <div>
              <i class="fa fa-envelope"></i>
              <p>counselme@gmail.com</p>
            </div>

            <div>
              <i class="fa fa-phone"></i>
              <p>+234 564 6756 787</p>
            </div>

          </div>
        </div>

        <div class="col-lg-5 col-md-8">
          <div class="form">
            <div id="sendmessage">Your message has been sent. Thank you!</div>
            <div id="errormessage"></div>
            <form action="" method="post" role="form" class="contactForm">
              <div class="form-group">
                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div class="validation"></div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>

  <footer class="site-footer">
    <div class="bottom">
      <div class="container">
        <div class="row">

          <div class="col-lg-6 col-xs-12 text-lg-left text-center">
            <p class="copyright-text">
              © Counsel Me
            </p>
            <div class="credits">
              
             Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>

          <div class="col-lg-6 col-xs-12 text-lg-right text-center">
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="/">Home</a>
              </li>

              <li class="list-inline-item">
                <a href="#about">About Us</a>
              </li>

              <li class="list-inline-item">
                <a href="#features">Features</a>
              </li>

              <li class="list-inline-item">
                <Link to="/login">Login</Link>
              </li>

              <li class="list-inline-item">
                <Link to="/register">Register</Link>
              </li>

              <li class="list-inline-item">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </footer>
  <a class="scrolltop" href="#"><span class="fa fa-angle-up"></span></a> 
  {/* </section> */}
  {/* */}
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
