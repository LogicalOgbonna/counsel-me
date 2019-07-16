import React, { Component } from "react";
import propType from "prop-types";
import { connect } from "react-redux";
import { GuardSpinner } from "react-spinners-kit";

import { viewCourses } from "../../actions/upload";
import { GenericTable } from "../../common/Table";

import Nav from "../Nav";
import Footer from "../Footer";

class ViewCourses extends Component {
  state = {
    course: [],
    spinner: true
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.course !== this.props.course) {
      this.setState({ course: nextProps.course, spinner: false });
    }
  }

  componentDidMount() {
    this.props.viewCourses();
  }

  render() {
    return (
      <React.Fragment>
        <Nav active="view" />
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-2" />
            <div className="col-md-8 pt-3">
              {this.state.spinner ? (
                <div style={{ marginLeft: "50%", marginTop: "20%" }}>
                  <GuardSpinner
                    size={30}
                    backColor="#686769"
                    frontColor="#00ff89"
                    color="#686769"
                    loading={this.state.loading}
                  />
                </div>
              ) : (
                <GenericTable type="courses" data={this.state.course} name="View Courses" />
              )}
            </div>
            <div className="col-md-" />
          </div>
        </div>
        <Footer isAuthenticated={true} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  course: state.uploads.course
});
ViewCourses.propType = {
  viewCourses: propType.func.isRequired,
  course: propType.array
};

export default connect(
  mapStateToProps,
  { viewCourses }
)(ViewCourses);
