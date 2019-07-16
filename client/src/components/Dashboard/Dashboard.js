import React, { Component } from "react";
import { connect } from "react-redux";

import Nav from "../Nav";
import Footer from "../Footer";
import "./Dashboard.css";
import Display from "./Display";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav active="dashboard" />
        <Display admin={this.props.user.admin} />
        <Footer isAuthenticated={true} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(mapStateToProps)(Dashboard);
