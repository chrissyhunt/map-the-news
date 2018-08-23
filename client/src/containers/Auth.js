import React from 'react';
import { Redirect } from 'react-router-dom';

function Auth(RenderedComponent, props) {
  return class extends React.Component {

    loggedIn() {
      if (localStorage.getItem('jwt') && this.props.location.pathname === '/login') {
        return <Redirect to='/news' />
      } else if (!localStorage.getItem("jwt") && this.props.location.pathname !== '/login') {
        return <Redirect to='/login' />
      } else {
        return <RenderedComponent {...this.props} {...props} />
      }
    }

    render() {
      return (
        this.loggedIn()
      )
    }
  }
}

export default Auth;
