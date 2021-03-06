import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../../actions/auth";
import Header from "../../Header";
import Footer from "../../Footer";
import validator from "validator";

import "./Login.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {},
    loading: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      const errors = {};
      if (nextProps.errors.email) errors.email = nextProps.errors.email;
      if (nextProps.errors.password) errors.email = nextProps.errors.password;
      this.setState({ errors, loading: false });
    }
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = data => {
    const errors = {};
    // const emailRegex = /[0-9]{4}[/]{1}[0-9]{6}/;
    // if (!emailRegex.test(data.email))
      // errors.email = "Invalid Registration Number";
    if (!data.password) errors.password = "Can't be blank";
    if (!validator.isEmail(data.email)) errors.email = "Invalid email address";

    return errors;
  };

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.login(this.state);
      this.setState({ loading: true });
    }
  };
  render() {
    return (
      <React.Fragment>
        <Header active="login" />
        <div>
          <div id="login" className="container">
            <div className="row">
              <div className="col-md-4" />
              <div className="col-md-4 ">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Registration Number</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      onChange={this.onChange}
                    />
                    {this.state.errors && (
                      <small id="emailHelp" className="form-text text-danger">
                        {this.state.errors.email}
                      </small>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      onChange={this.onChange}
                    />
                    {this.state.errors && (
                      <small
                        id="passwordHelp"
                        className="form-text text-danger"
                      >
                        {this.state.errors.password}
                      </small>
                    )}
                  </div>
                  <button
                    disabled={this.state.loading}
                    type="submit"
                    className="btn btn-primary left"
                  >
                    {this.state.loading ? "Wait ..." : "Login"}
                  </button>
                </form>
              </div>
              <div className="col-md-4" />
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.user.authError
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
