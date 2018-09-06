import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import '../../Welcome.css';
import Signup from './Signup';
import Login from './Login';
import { getToken } from '../../actions/Users';

class Welcome extends Component {
  constructor() {
    super();

    this.state = {
      displayLogin: false
    }
  }

  displayCreateAccount = (event) => {
    event.preventDefault();
    this.setState({
      displayLogin: false
    })
  }

  render() {
    const form = this.state.displayLogin ? <Login history={this.props.history}/> : <Signup history={this.props.history}/>

    return (
      <React.Fragment>
        <div className="welcome-header">
          <p>Welcome to</p>
          <h1>Map the News</h1>
        </div>

        <div className="welcome-container">
          <div className="welcome-shadow">
            <div className="welcome-menu">
              <div className="tab tab-left">
                <h2>Log In</h2>
              </div>
              <div className="tab tab-right">
                <h2>Create Account</h2>
              </div>
            </div>

            <div class="welcome-main">
              {form}
            </div>
          </div>

          <p class="welcome-footer">Built in React by <a href="http://chrissyhunt.com/">Chrissy Hunt</a> and powered by the <a href="https://newsapi.org/">News API</a>.</p>
        </div>

        <div class="image-layer">
          &nbsp;
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null, { getToken })(Welcome);
