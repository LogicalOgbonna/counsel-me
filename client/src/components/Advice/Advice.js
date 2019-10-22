import React from "react";
import { connect } from "react-redux";
import Nav from "../Nav";
import Footer from "../Footer";
// import "../Dashboard/Dashboard.css";
import "../CareerPath/CareerPath.css";
import { WorkTable } from "../../common/Table";

function Advice(props) {
   console.log(props.advice)
  return (
    <React.Fragment>
      <Nav active="dashboard" />
      <div className="dashboard" id="home">
        <div className="layer">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-3 banner-text-w3pvt">
                <h4 className="b-w3ltxt text-capitalize text-center">Advice</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="banner-career banner2">
              <div className="slogan">
                Area of Specialization based on your B.Sc result
              </div>
              <h1 className="text-capitalize"> Area of Specialization</h1>
            </div>

            <div className="col-md-12">
              <div className=" mt-3">
                {/* <label htmlFor="Result_given"> */}
                <WorkTable name="Jobs" data={props.advice} notRiasec={true} />
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      <Footer isAuthenticated={true} />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  advice: state.uploads.advice
});

export default connect(mapStateToProps)(Advice);
