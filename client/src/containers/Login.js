import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../Welcome.css';
import { getToken, getUser } from '../actions/Users';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      redirect: false
    }
  }

  handleEmailOnChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordOnChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("handleOnSubmit: ", this.state)
    this.props.getToken(this.state);
    this.props.getUser(this.state);
    this.setState({
      email: '',
      password: '',
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/news' />
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>Welcome to Map the News!</h1>
        <h2>Log In</h2>
        <form onSubmit={e => this.handleOnSubmit(e)}>
          <label>Email:</label>
          <input type="text" value={this.state.email} name="email" onChange={e => this.handleEmailOnChange(e)}/><br />
          <label>Password:</label>
          <input type="password" value={this.state.password} name="password" onChange={e => this.handlePasswordOnChange(e)}/><br />
          <input type="submit" value="Log In"/>
        </form>
        {this.renderRedirect()}
      </React.Fragment>
    );
  }
}

export default connect(null, { getToken, getUser })(Login);
