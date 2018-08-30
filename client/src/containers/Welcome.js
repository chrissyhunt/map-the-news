import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../Welcome.css';
import { getToken } from '../actions/Users';

class Welcome extends Component {
  constructor() {
    super();

    this.state = {
      loginUserInfo: {
        email: '',
        password: ''
      },
      createAccountUserInfo: {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
      }
    }
  }

  handleEmailOnChange = (event) => {
    this.setState({
      ...this.state,
      loginUserInfo: {
        ...this.state.loginUserInfo,
        email: event.target.value
      }
    })
  }

  handlePasswordOnChange = (event) => {
    this.setState({
      ...this.state,
      loginUserInfo: {
        ...this.state.loginUserInfo,
        password: event.target.value
      }
    })
  }

  handleLogin = (event) => {
    event.preventDefault();
    this.props.getToken(this.state.loginUserInfo, this.props.history);
    this.setState({
      ...this.state,
      loginUserInfo: {
        email: '',
        password: '',
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Welcome to Map the News!</h1>
        <h2>Log In</h2>

        <form onSubmit={e => this.handleLogin(e)}>
          <label>Email:</label>
          <input type="text" value={this.state.loginUserInfo.email} name="email" onChange={e => this.handleEmailOnChange(e)}/><br />
          <label>Password:</label>
          <input type="password" value={this.state.loginUserInfo.password} name="password" onChange={e => this.handlePasswordOnChange(e)}/><br />
          <input type="submit" value="Log In"/>
        </form>

        <h2>Create Account</h2>

        <form>
          <label>First Name:</label>
          <input type="text" value={this.state.createAccountUserInfo.firstName} name="firstName"/><br />
          <label>Last Name:</label>
          <input type="text" value={this.state.createAccountUserInfo.lastName} name="lastName"/><br />
          <label>Email:</label>
          <input type="text" value={this.state.createAccountUserInfo.email} name="email" onChange={e => this.handleEmailOnChange(e)}/><br />
          <label>Password:</label>
          <input type="password" value={this.state.createAccountUserInfo.password} name="password" onChange={e => this.handlePasswordOnChange(e)}/><br />
          <input type="submit" value="Log In"/>
        </form>
      </React.Fragment>
    );
  }
}

export default connect(null, { getToken })(Welcome);
