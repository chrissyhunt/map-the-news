import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../Welcome.css';
import { getToken } from '../actions/Users';

class Login extends Component {
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

  handleEmailOnChange = (event) => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        email: event.target.value
      }
    })
  }

  handlePasswordOnChange = (event) => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        password: event.target.value
      }
    })
  }

  handleLogin = (event) => {
    event.preventDefault();
    this.props.getToken(this.state.userInfo, this.props.history);
    this.setState({
      userInfo: {
        email: '',
        password: '',
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Welcome to Map the News!</h1>
        <p><button>Log In</button> or <button>Create Account</button></p>
      </React.Fragment>
    );
  }
}

export default connect(null, { getToken })(Login);

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
