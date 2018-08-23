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
      },
      redirect: false
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

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("handleOnSubmit: ", this.state)
    this.props.getToken(this.state.userInfo);
    this.setState({
      userInfo: {
        email: '',
        password: '',
      },
      redirect: true
    })
    this.props.history.push('/news')
  }

  // renderRedirect = () => {
  //   if (this.state.redirect && localStorage.getItem("jwt")) {
  //     return <Redirect to='/news' />
  //   }
  // }

  render() {
    return (
      <React.Fragment>
        <h1>Welcome to Map the News!</h1>
        <h2>Log In</h2>
        <form onSubmit={e => this.handleOnSubmit(e)}>
          <label>Email:</label>
          <input type="text" value={this.state.userInfo.email} name="email" onChange={e => this.handleEmailOnChange(e)}/><br />
          <label>Password:</label>
          <input type="password" value={this.state.userInfo.password} name="password" onChange={e => this.handlePasswordOnChange(e)}/><br />
          <input type="submit" value="Log In"/>
        </form>
      </React.Fragment>
    );
  }
}

export default connect(null, { getToken })(Login);
