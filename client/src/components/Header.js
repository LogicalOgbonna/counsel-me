import React from "react";
import propTypes from "prop-types";
import "bootstrap";
import { connect } from "react-redux";

import "./Header.css";
// import logo from "./images/s2.png";
import { Link } from "react-router-dom";
import { logout } from "../actions/auth";

const Header = ({ isAuthenticated, user, logout, active }) => {
  console.log(isAuthenticated);
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          CENM
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item ${active === "home" && "active"} `}>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className={`nav-item ${active === "about" && "active"} `}>
              <Link to="/#about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className={`nav-item ${active === "services" && "active"} `}>
              <Link to="/#features" className="nav-link">
                Features
              </Link>
            </li>
            <li className={`nav-item ${active === "contact" && "active"} `}>
              <Link to="/#contact" className="nav-link">
                Contact Us
              </Link>
            </li>
            {!isAuthenticated && (
              <React.Fragment>
                <li
                  className={`nav-item ${active === "register" && "active"} `}
                >
                  <Link to="/register" className="nav-link">
                    Sign up
                  </Link>
                </li>
                <li className={`nav-item ${active === "login" && "active"} `}>
                  <Link to="/login" className="nav-link">
                    Sign in
                  </Link>
                </li>
              </React.Fragment>
            )}
            {isAuthenticated && (
              <React.Fragment>
                <li className={`nav-item ${active === "login" && "active"} `}>
                  <Link to="/dashboard" className="nav-link btn btn-secondary">
                    Dashboard
                  </Link>
                </li>
                <li className={`nav-item ${active === "login" && "active"} `}>
                  <button
                    className="nav-link btn btn-secondary ml-2"
                    onClick={() => logout()}
                    type="submit"
                  >
                    LOGOUT
                  </button>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  isAuthenticated: propTypes.bool.isRequired,
  user: propTypes.object,
  logout: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user.user
});
export default connect(
  mapStateToProps,
  { logout }
)(Header);
