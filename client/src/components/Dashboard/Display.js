import React from "react";
import { Link } from "react-router-dom";

import Card from "../ServiceCard";
import { SpecializationTable } from "../../common/Table";

export default function Display({ admin, specialization }) {
  return (
    <React.Fragment>
      <div className="dashboard" id="home">
        <div className="layer">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-3 banner-text-w3pvt">
                <h4 className="b-w3ltxt text-capitalize text-center">
                  {admin
                    ? "Manage Courses and Users"
                    : "Know Today What You Will Study"}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!admin ? (
        <div className="row mt-5">
          <div className="col-md-1" />
          <div className="col-md-7">
            <SpecializationTable
              data={specialization}
              type="specialization"
              name="Areas of Specialization"
            />
            {/* <Card dashboard={true} /> */}
          </div>
          <div className="col-md-4">
            <div className="btn btn-primar">
              <Link to="/career" style={{ color: "white" }}>
                Take Advice
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-10 offset-1">
            <Card dashboard={true} admin={admin} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
