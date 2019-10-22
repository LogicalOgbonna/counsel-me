import React, { Component } from "react";
import { connect } from "react-redux";
import { getSpecialization, viewCourses, addStudent, search } from "../../actions/upload";

import Nav from "../Nav";
import Footer from "../Footer";
import "./Dashboard.css";
import Display from "./Display";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getSpecialization();
    this.props.viewCourses();
  }
  addStudent = data => {
    this.props.addStudent(data)
  }
  search = data => {
    this.props.search(data)
  }
  render() {
console.log(this.props.adviceError);
    return (
      <React.Fragment>
        <Nav active="dashboard" />
        <Display
          specialization={this.props.specialization}
          user={this.props.user}
          course={this.props.courses}
          addStudent={this.addStudent}
          courseAdded={this.props.student}
          search={this.search}
          error={this.props.adviceError}
        />
        <Footer isAuthenticated={true} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  specialization: state.uploads.specialization,
  courses: state.uploads.course,
  student: state.uploads.student,
  adviceError: state.uploads.adviceError
});

export default connect(
  mapStateToProps,
  { getSpecialization, viewCourses, addStudent, search }
)(Dashboard);
