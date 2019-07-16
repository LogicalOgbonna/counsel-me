import React, { Component } from "react";
import readXlsxFile from "read-excel-file";
import propType from "prop-types";
import { connect } from "react-redux";

import { uploadCourses } from "../../actions/upload";

import Nav from "../Nav";
import Footer from "../Footer";

class UploadCourse extends Component {
  state = {
    courses: {},
    coursesAdded: false,
    loading: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.course) {
      this.setState({ coursesAdded: nextProps.course, loading: false });
    }
  }
  onChange = e => {
    const file = e.target.files[0];
    let courses = {};
    courses.course = [];
    readXlsxFile(file).then(row => {
      for (let i = 1; i < row.length; i++) {
        courses.course.push({
          code: row[i][0],
          name: row[i][1]
        });
      }
      this.setState({ courses });
    });
  };
  onSubmit = e => {
    e.preventDefault();
    if (Object.keys(this.state.courses).length > 0) {
      this.setState({ loading: true });
      this.props.uploadCourses(this.state.courses);
    }
  };

  clearAddedQuestion = () => {
    setTimeout(this.setState({ coursesAdded: false }), 1000);
  };
  render() {
    return (
      <React.Fragment>
        <Nav active="course" />
        <div className="container">
          <form
            onSubmit={this.onSubmit}
            style={{ marginTop: "10%", marginBottom: "10%" }}
            className=""
          >
            {this.state.coursesAdded && (
              <div className="row">
                <div className="col-md-6 offset-3">
                  <div className="alert alert-success alert-dismissible">
                    <a
                      href="#"
                      className="close"
                      data-dismiss="alert"
                      aria-label="close"
                    >
                      &times;
                    </a>
                    <strong>Success!</strong> Courses Uploaded Successfully.
                  </div>
                </div>
              </div>
            )}
            <div className="row">
              <div className="col-sm-4 offset-4 ">
                <h5 className="mb-3 text-center">Upload Courses</h5>
                <div className="input-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    name="excel"
                    id="excel"
                    aria-describedby="basic-addon2"
                    onChange={this.onChange}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">
                      <button className="btn btn-primary">Upload</button>
                    </span>
                  </div>
                </div>
                <div className="form-style-w3ls">
                  <button
                    disabled={this.state.loading}
                    type="submit"
                    className="btn"
                  >
                    {this.state.loading ? "Loading..." : "Upload"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <Footer isAuthenticated={true} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  course: !!state.uploads.courses
});
UploadCourse.propType = {
  uploadCourses: propType.func.isRequired,
  course: propType.bool
};

export default connect(
  mapStateToProps,
  { uploadCourses }
)(UploadCourse);
