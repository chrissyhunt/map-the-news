import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './NewsItemPositions.css'
import Welcome from './containers/Welcome';
import Login from './containers/Login';
import NewsMap from './containers/NewsMap';
import UserSettings from './containers/UserSettings';
import { userIsNotAuthenticated, userIsAuthenticated } from './utils/Authentication';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={userIsNotAuthenticated(Welcome)} />
        <Route exact path="/login" component={userIsNotAuthenticated(Login)} />
        <Route exact path="/news" component={userIsAuthenticated(NewsMap)} />
        <Route exact path="/account" render={userIsAuthenticated(UserSettings)} />
      </React.Fragment>
    );
  }
}

export default App;
