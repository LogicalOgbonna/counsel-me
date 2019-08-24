import React, { Component } from "react";
import { connect } from "react-redux";
import { getSpecialization } from "../../actions/upload";

import Nav from "../Nav";
import Footer from "../Footer";
import "./Dashboard.css";
import Display from "./Display";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getSpecialization();
  }
  render() {
    // console.log(this.props.specialization);
    return (
      <React.Fragment>
        <Nav active="dashboard" />
        <Display specialization={this.props.specialization} admin={this.props.user.admin} />
        <Footer isAuthenticated={true} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  specialization: state.uploads.specialization
});

export default connect(
  mapStateToProps,
  { getSpecialization }
)(Dashboard);
