import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { getToken } from '../../actions/Users';

class Login extends Component {
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
    );
  }
}

export default connect(null, { getToken })(Login);
