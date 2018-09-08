import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class AppInfo extends Component {

  render() {
    return (
      <div className="container">
        <div className="row header-row">
          <div className="header">
            <div className="header-left">
              <span className="title">MAP THE NEWS</span>
            </div>
            <div className="header-right">
              <p class="menu">
                <a role="button">Settings</a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a role="button">Logout</a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link to="/news">Back to News Map</Link>
              </p>
            </div>
          </div>
        </div>


        <h1>About Map the News</h1>
      </div>
    );
  }
}

export default AppInfo;
