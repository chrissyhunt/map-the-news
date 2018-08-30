import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../Welcome.css';
import { getToken } from '../actions/Users';

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      userInfo: {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
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
    // this.props.getToken(this.state.userInfo, this.props.history);
    this.setState({
      userInfo: {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
      }
    })
  }

  render() {
    return (
      <React.Fragment>
      <h2>Create Account</h2>

      <form>
        <label>First Name:</label>
        <input type="text" value={this.state.userInfo.firstName} name="firstName" onChange={e => this.handleChange(e)}/><br />
        <label>Last Name:</label>
        <input type="text" value={this.state.userInfo.lastName} name="lastName" onChange={e => this.handleChange(e)}/><br />
        <label>Email:</label>
        <input type="text" value={this.state.userInfo.email} name="email" onChange={e => this.handleChange(e)}/><br />
        <label>Password:</label>
        <input type="password" value={this.state.userInfo.password} name="password" onChange={e => this.handleChange(e)}/><br />
        <input type="submit" value="Log In"/>
      </form>
      </React.Fragment>
    );
  }
}

export default connect(null, { getToken })(Signup);

// <h2>Log In</h2>
// <form onSubmit={e => this.handleLogin(e)}>
//   <label>Email:</label>
//   <input type="text" value={this.state.userInfo.email} name="email" onChange={e => this.handleEmailOnChange(e)}/><br />
//   <label>Password:</label>
//   <input type="password" value={this.state.userInfo.password} name="password" onChange={e => this.handlePasswordOnChange(e)}/><br />
//   <input type="submit" value="Log In"/>
// </form>
//
// <h2>Create Account</h2>
// <form onSubmit={e => this.handleCreateAccount(e)}>
//   <label>Email:</label>
//   <input type="text" value={this.state.userInfo.email} name="email" onChange={e => this.handleEmailOnChange(e)}/><br />
//   <label>Password:</label>
//
// </form>
