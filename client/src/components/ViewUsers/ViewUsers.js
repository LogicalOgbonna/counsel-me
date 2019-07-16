import React, { Component } from "react";
import { GuardSpinner } from "react-spinners-kit";
import { connect } from "react-redux";

import { GenericTable } from "../../common/Table";
import { viewUsers } from "../../actions/upload";

import Nav from "../Nav";
import Footer from "../Footer";

class ViewUsers extends Component {
  state = {
    users: [],
    spinner: true
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.users !== this.props.users) {
      this.setState({ users: nextProps.users, spinner: false });
    }
  }

  componentDidMount() {
    this.props.viewUsers();
  }
  render() {
    return (
      <React.Fragment>
        <Nav active="users" />
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
                <GenericTable
                  type="user"
                  data={this.state.users}
                  name="Registered Users"
                />
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
  users: state.uploads.users
});

export default connect(
  mapStateToProps,
  { viewUsers }
)(ViewUsers);
