import React, { Component } from 'react';
import './App.css';
import './NewsItemPositions.css'
import Welcome from './Welcome';
import Login from './Login';
import NewsMap from './NewsMap';
import UserSettings from './UserSettings';
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
