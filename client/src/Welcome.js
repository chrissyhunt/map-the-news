import React, { Component } from 'react';
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

export default Welcome;
