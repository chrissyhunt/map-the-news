import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      <h1>Welcome!</h1>
    </div>
  )
}

const User = () => {
  return (
    <div>
      <h1>User Settings</h1>
    </div>
  )
}

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route exact path="/" render={Welcome} />
      <Route exact path="/news" component={App} />
      <Route exact path="/account" render={User} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
registerServiceWorker();
