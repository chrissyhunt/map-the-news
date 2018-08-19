import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Welcome.css';

class Welcome extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
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
    this.login(this.state);
    // reset state
  }

  login = (userInfo) => {
    fetch('http://localhost:3000/api/user_token', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(response => response.json())
    .then(json => this.props.setUser(json))
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
