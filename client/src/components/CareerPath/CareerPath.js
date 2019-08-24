import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { PushSpinner } from "react-spinners-kit";
import readXlsxFile from "read-excel-file";

import { uploadGrade } from "../../actions/upload";

import { ResultTable, WorkTable } from "../../common/Table";
import Nav from "../Nav";
import Footer from "../Footer";
import "./CareerPath.css";
// import Card from "../ServiceCard";
class Career extends Component {
  state = {
    student: {},
    career: [],
    loading: false,
    table: false,
    riasec: [],
    passedSubjects: []
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.career) {
      this.setState({ career: nextProps.career, loading: false, table: true });
    }
    if (nextProps.riasec && nextProps.riasec.length) {
      this.setState({ riasec: nextProps.riasec });
    }
  }
  onChange = e => {
    const file = e.target.files[0];
    let student = {};
    let subjects = [];
    let passedSubjects = [];
    readXlsxFile(file).then(row => {
      for (let i = 1; i < row.length; i++) {
        subjects = [
          ...subjects,
          {
            name: row[i][0].toUpperCase(),
            grade: row[i][1].toUpperCase(),
            point: row[i][2]
          }
        ];
      }
      // subjects.filter(
      //   subject =>
      //     subject.grade.toUpperCase() <= "C" && passedSubjects.push(subject)
      // );
      student.subjects = subjects;
      passedSubjects = subjects;
      this.setState({ student, passedSubjects });
    });
  };

  validate = data => {
    const errors = {};
    if (!data.passedSubjects.length) errors.student = "Please Select a file";

    return errors;
  };
  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state);
    this.setState({ errors });
    const { passedSubjects } = this.state;
    if (Object.keys(errors).length === 0) {
      this.props.uploadGrade(passedSubjects);
      this.setState({ loading: false, table: true });
    }
  };
  render() {
    return (
      <div>
        <Nav active="career" />
        {this.state.loading ? (
          <div className="center-spinner">
            <div
              style={{ marginTop: "10%", marginBottom: "10%" }}
              className="row"
            >
              <div className="col-md-4 offset-4">
                <PushSpinner
                  size={50}
                  color="#686769"
                  loading={this.state.loading}
                />
              </div>
            </div>
          </div>
        ) : this.state.table ? (
          <div style={{ marginTop: "5%", marginBottom: "10%" }} className="row">
            <div className="col-md-8 offset-2">
              <div className="row">
                <div className="banner-career banner6">
                  <div className="slogan">Your B.Sc Result</div>
                  <h1> YOUR RESULT</h1>
                </div>
                <div className="col-md-2" />
                <div className="col-md-8 mt-3">
                  <ResultTable
                    name="Your Result"
                    subjects={this.state.student.subjects}
                    withGrade={true}
                  />
                </div>
                <div className="col-md-2 mt-3">
                  {/* <ResultTable
                    name="Passed Subjects (C is the least)"
                    subjects={this.state.passedSubjects}
                    withGrade={true}
                  /> */}
                </div>
              </div>
              {/* Test RAISEC */}
              <div className="row">
                <div className="banner-career banner2">
                  <div className="slogan">
                    Area of Specialization based on your B.Sc result
                  </div>
                  <h1 className="text-capitalize"> Area of Specialization</h1>
                </div>

                <div className="col-md-12">
                  <div className=" mt-3">
                    {/* <label htmlFor="Result_given"> */}
                    <WorkTable
                      name="Jobs"
                      data={this.state.career}
                      notRiasec={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <form
            onSubmit={this.onSubmit}
            style={{ marginTop: "10%", marginBottom: "10%" }}
            className=""
          >
            <div className="row">
              <div className="col-sm-4 offset-4 ">
                <h5 className="mb-3 text-center">
                  Upload Your Your B.Sc Result
                </h5>
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
                    {/* <span className="input-group-text" id="basic-addon2">
                      <button className="btn btn-primary">Upload</button>
                    </span> */}
                  </div>
                </div>
                {this.state.errors && (
                  <span
                    className="text-center"
                    style={{ color: "red", marginLeft: "35%" }}
                  >
                    {this.state.errors.student}
                  </span>
                )}
                <div className="form-style-w3ls">
                  <button
                    disabled={this.state.loading}
                    type="submit"
                    className="btn"
                  >
                    {" "}
                    Advice Me{" "}
                  </button>
                </div>
                <h5 className="mb-3 text-center text-muted mt-1">
                  YOUR INFORMATION IN SECURE WITH US
                </h5>
              </div>
            </div>
          </form>
        )}
        <Footer isAuthenticated={true} />
      </div>
    );
  }
}

Career.propTypes = {
  isAuthenticated: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  career: state.uploads.career
});

export default connect(
  mapStateToProps,
  { uploadGrade }
)(Career);
