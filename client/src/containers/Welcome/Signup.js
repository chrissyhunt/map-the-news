import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import '../Welcome.css';
import { createUser } from '../actions/Users';

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      userInfo: {
        email: '',
        password: '',
        first_name: '',
        last_name: ''
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

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createUser(this.state.userInfo, this.props.history)
    this.setState({
      userInfo: {
        email: '',
        password: '',
        first_name: '',
        last_name: ''
      }
    })
  }

  render() {
    return (
      <React.Fragment>
      <h1>Welcome to Map the News!</h1>
      <h2>Create Account</h2>

      <form onSubmit={e => this.handleSubmit(e)}>
        <label>First Name:</label>
        <input type="text" value={this.state.userInfo.first_name} name="first_name" onChange={e => this.handleChange(e)}/><br />
        <label>Last Name:</label>
        <input type="text" value={this.state.userInfo.last_name} name="last_name" onChange={e => this.handleChange(e)}/><br />
        <label>Email:</label>
        <input type="text" value={this.state.userInfo.email} name="email" onChange={e => this.handleChange(e)}/><br />
        <label>Password:</label>
        <input type="password" value={this.state.userInfo.password} name="password" onChange={e => this.handleChange(e)}/><br />
        <input type="submit" value="Log In"/>
      </form>

      <p><Link to={'/'}>Or Log In with Existing Account</Link></p>

      </React.Fragment>
    );
  }
}

export default connect(null, { createUser })(Signup);
