import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import './App.css';
import './NewsItemPositions.css'
import Welcome from './containers/Welcome';
import Signup from './containers/Signup';
import NewsMap from './containers/NewsMap';
import UserSettings from './containers/UserSettings';
import Auth from './containers/Auth';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Auth(Welcome)} />
        <Route exact path="/signup" component={Auth(Signup)} />
        <Route exact path="/news" component={Auth(NewsMap)} />
        <Route exact path="/settings" render={Auth(UserSettings)} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}

export default withRouter(connect(mapStateToProps)(App));
