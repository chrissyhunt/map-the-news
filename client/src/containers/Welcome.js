import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../Welcome.css';

class Welcome extends Component {
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
    this.getToken(this.state);
    this.getUser(this.state);
    this.setState({
      email: '',
      password: '',
      redirect: true
    })
  }

  getToken = (userInfo) => {
    fetch('http://localhost:3000/api/user_token', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({auth: userInfo})
    })
    .then(response => response.json())
    .then(result => localStorage.setItem("jwt", result.jwt))
  }

  getUser = (userInfo) => {
    let token = "Bearer " + localStorage.getItem("jwt");
    fetch('http://localhost:3000/api/user', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    })
    .then(response => response.json())
    .then(json => this.props.setUser(json))
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

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (response) => dispatch({ type: "SET_USER", payload: response })
  }
}

export default connect(null, mapDispatchToProps)(Welcome);
