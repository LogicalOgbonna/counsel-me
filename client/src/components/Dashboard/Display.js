import React from "react";
import { Link } from "react-router-dom";

// import Card from "../ServiceCard";
// import { SpecializationTable } from "../../common/Table";

export default class Display extends React.Component {
  state = {
    name: "",
    errors: {},
    regNo: "",
    excel: [],
    courseCode: "",
    grade: "",
    searchRegNo: ""
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    this.props.addStudent(this.state);
  };
  onSearch = e => {
    e.preventDefault();
    this.props.search(this.state.searchRegNo);
    console.log(this.state.searchRegNo);
  };
  render() {
    return (
      <React.Fragment>
        <div className="dashboard" id="home">
          <div className="layer">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-3 banner-text-w3pvt">
                  <h4 className="b-w3ltxt text-capitalize text-center">
                    {this.props.user.who === "hod"
                      ? "Welcome HOD"
                      : "Welcome Course Adviser"}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.props.user.who === "hod" ? (
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-6">
                <h3 className="text-center alert alert-info">
                  Upload A Student's Result
                </h3>
                {Object.keys(this.props.courseAdded).length > 0 && (
                  <div>
                    <h3 className="text-center">
                      <strong className="alert alert-info">
                        Course Added Succesfully
                      </strong>
                    </h3>
                  </div>
                )}
                <form className="form-group" onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Enter Student's Name"
                      onChange={this.onChange}
                      required
                    />
                    {this.state.errors && (
                      <span id="nameHelp" className="form-text text-danger">
                        {this.state.errors.name}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="regNo">Registration Number:</label>
                    <input
                      type="text"
                      name="regNo"
                      className="form-control"
                      id="regNo"
                      placeholder="Enter Student's Registration Number"
                      onChange={this.onChange}
                      required
                    />
                    {this.state.errors && (
                      <span id="regNoHelp" className="form-text text-danger">
                        {this.state.errors.regNo}
                      </span>
                    )}
                  </div>

                  <div className="form-group mb">
                    <label htmlFor="courseCode">Select Course:</label>
                    <select
                      className="form-control"
                      name="courseCode"
                      id="courseCode"
                      value={this.state.courseCode}
                      onChange={this.onChange}
                      required
                    >
                      <option value="">Select a course</option>
                      {this.props.course.length > 0 &&
                        this.props.course.map((course, i) => (
                          <option
                            className="text-capitalize"
                            value={course.code}
                            key={i}
                          >
                            {i + 1 + ":"} {course.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  {this.state.errors && (
                    <span className="text-center" style={{ color: "red" }}>
                      {this.state.errors.courseCode}
                    </span>
                  )}
                  <div className="form-group mb-3">
                    <label htmlFor="grade">Select Grade:</label>
                    <select
                      className="form-control"
                      name="grade"
                      value={this.state.grade}
                      onChange={this.onChange}
                      required
                    >
                      <option value="">Select a grade</option>
                      {["A", "B", "C", "D"].map((grade, i) => (
                        <option
                          className="text-capitalize"
                          value={grade}
                          key={i}
                        >
                          {" "}
                          {grade}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-style-w3ls">
                    <button
                      disabled={this.state.loading}
                      type="submit"
                      className="btn"
                    >
                      {" "}
                      Add Course{" "}
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                <h3 className="text-center alert alert-success">
                  Advice a Student
                </h3>
                <form className="form-group" onSubmit={this.onSearch}>
                  <div className="form-group">
                    {/* <label htmlFor="name">Name:</label> */}
                    <input
                      type="text"
                      name="searchRegNo"
                      className="form-control"
                      id="searchRegNo"
                      placeholder="Enter Student's Registration Number"
                      onChange={this.onChange}
                      required
                    />
                    {this.props.error && (
                      <span
                        id="nameHelp"
                        className="form-text text-danger text-center"
                      >
                        {this.props.error}
                      </span>
                    )}
                  </div>
                  <div className="form-style-w3ls">
                    <button
                      disabled={this.state.loading}
                      type="submit"
                      className="btn"
                    >
                      {" "}
                      Advise{" "}
                    </button>
                  </div>
                </form>
                {/* <SpecializationTable
                data={specialization}
                type="specialization"
                name="Areas of Specialization"
              /> */}
                {/* <Card dashboard={true} /> */}
              </div>
              {/* <div className="col-md-4">
              <div className="btn btn-primar">
                <Link to="/career" style={{ color: "white" }}>
                  Take Advice
                </Link>
              </div>
            </div> */}
            </div>
          </div>
        ) : (
          <div className="container mt-5">
            <div className="row m-5">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                {/* <Card dashboard={true} admin={admin} /> */}
                {/* <div className="col-md-6"> */}
                <h3 className="text-center alert alert-success">
                  Advice a Student
                </h3>
                <form className="form-group" onSubmit={this.onSearch}>
                  <div className="form-group">
                    {/* <label htmlFor="name">Name:</label> */}
                    <input
                      type="text"
                      name="searchRegNo"
                      className="form-control"
                      id="searchRegNo"
                      placeholder="Enter Student's Registration Number"
                      onChange={this.onChange}
                      required
                    />
                    {this.props.error && (
                      <span
                        id="nameHelp"
                        className="form-text text-danger text-center"
                      >
                        {this.props.error}
                      </span>
                    )}
                  </div>
                  <div className="form-style-w3ls">
                    <button
                      disabled={this.state.loading}
                      type="submit"
                      className="btn"
                    >
                      {" "}
                      Advise{" "}
                    </button>
                  </div>
                </form>
                {/* <SpecializationTable
                data={specialization}
                type="specialization"
                name="Areas of Specialization"
              /> */}
                {/* <Card dashboard={true} /> */}
                {/* </div> */}
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
