import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import '../../Welcome.css';
import { getToken } from '../../actions/Users';

class Welcome extends Component {
  constructor() {
    super();

    this.state = {
      userInfo: {
        email: '',
        password: ''
      }
    }
  }

  handleChange = (event) => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [event.target.name]: event.target.value
      }
    })
  }

  handleLogin = (event) => {
    event.preventDefault();
    this.props.getToken(this.state.userInfo, this.props.history);
    this.setState({
      userInfo: {
        email: '',
        password: ''
      }
    })
  }

  render() {
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
              <form onSubmit={e => this.handleLogin(e)}>
                <div className="full-width">
                  <label>Email:</label>
                  <input type="text" value={this.state.userInfo.email} name="email" onChange={e => this.handleChange(e)}/><br />
                </div>

                <div classname="full-width">
                  <label>Password:</label>
                  <input type="password" value={this.state.userInfo.password} name="password" onChange={e => this.handleChange(e)}/><br />
                </div>

                <div className="full-width">
                  <input type="submit" value="Log In"/>
                </div>
              </form>
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
