import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { createUser } from '../../actions/Users';

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
      <form onSubmit={e => this.handleSubmit(e)}>
        <div className="welcome-half-width tab-left">
          <label>First Name:</label>
          <input type="text" value={this.state.userInfo.first_name} name="first_name" onChange={e => this.handleChange(e)}/><br />
        </div>

        <div className="welcome-half-width tab-right">
          <label>Last Name:</label>
          <input type="text" value={this.state.userInfo.last_name} name="last_name" onChange={e => this.handleChange(e)}/><br />
        </div>

        <div className="welcome-full-width">
          <label>Email:</label>
          <input type="text" value={this.state.userInfo.email} name="email" onChange={e => this.handleChange(e)}/><br />
        </div>

        <div classname="welcome-full-width">
          <label>Password:</label>
          <input type="password" value={this.state.userInfo.password} name="password" onChange={e => this.handleChange(e)}/><br />
        </div>

        <div className="welcome-full-width">
          <input type="submit" value="Create Account"/>
        </div>
      </form>
    );
  }
}

export default connect(null, { createUser })(Signup);
