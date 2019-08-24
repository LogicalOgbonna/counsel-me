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
  onSubmitCourse = e => {
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
          <div className="row">
            {this.state.coursesAdded && (
              <div className="col-md-12 mt-5">
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
            )}

            {this.state.specializationAdded && <div className="col-md-6" />}
          </div>
          <div className="row">
            {/* <div className="col-md-12 "> */}
            {/* <div className="row"> */}
            <div className="col-md-3" />
            <div className="col-md-6 ">
              <form
                onSubmit={this.onSubmitCourse}
                style={{ marginTop: "10%", marginBottom: "10%" }}
                className=""
              >
                <h5 className="mb-3 text-center">Upload Course</h5>
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
              </form>
            </div>
            <div className="col-md-3" />
            {/* </div> */}
            {/* </div> */}
            {/* <div className="col-md-6">
              <div className="col-md-8 offset-2">
                <form
                  style={{ marginTop: "10%", marginBottom: "10%" }}
                  className=""
                >
                  <h5 className="mb-3 text-center">Upload Descipline</h5>
                  <div className="form-style-w3ls">
                    <div className="input-group mb-3">
                      <div className="input-group mb-3">
                        <select
                          onChange={this.onChange}
                          name="descipline"
                          className="custom-select"
                          id="inputGroupSelect04"
                          value={this.state.descipline}
                        >
                          <option defaultValue>Choose...</option>
                          <option value="Computer Science">
                            Computer Science
                          </option>
                          <option value="Engineering">Engineering</option>
                        </select>
                      </div>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Field Name"
                        aria-label="Field Name"
                        name="name"
                        value={this.state.name}
                        id="name"
                        aria-describedby="basic-addon2"
                        onChange={this.onChange}
                      />

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Skills Needed"
                        aria-label="Skills Needed"
                        name="skills"
                        value={this.state.skills}
                        id="skills"
                        aria-describedby="basic-addon2"
                        onChange={this.onChange}
                      />

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Resource Link"
                        aria-label="Resource Link"
                        name="link"
                        id="link"
                        value={this.state.link}
                        aria-describedby="basic-addon2"
                        onChange={this.onChange}
                      />

                      <div className="form-group">
                        <label htmlFor="description">Description *</label>
                        <textarea
                          onChange={this.onChange}
                          placeholder="What the student need to know..."
                          className="form-control"
                          value={this.state.description}
                          name="description"
                          id="description"
                          rows="3"
                          cols="70"
                        />
                      </div>

                      <div className="ml-auto">
                        <button
                          type="button"
                          style={{
                            width: "30px",
                            height: "30px",
                            padding: "6px 0px",
                            borderRadius: "15px",
                            textAlign: "center",
                            fontSize: "12px",
                            lineHeight: 1.42857,
                            float: "left"
                          }}
                          onClick={this.addDescipline}
                          className="btn btn-default btn-circle"
                        >
                          <i className="fa fa-plus" />
                        </button>
                      </div>
                    </div>
                    <button
                      disabled={this.state.loading}
                      type="submit"
                      className="btn"
                    >
                      {this.state.loading ? "Loading..." : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
           */}
          </div>
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
