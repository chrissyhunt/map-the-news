import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

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
    <Provider store={store}>
      <React.Fragment>
        <Route exact path="/" render={Welcome} />
        <Route exact path="/news" component={App} />
        <Route exact path="/account" render={User} />
      </React.Fragment>
    </Provider>
  </Router>),
  document.getElementById('root')
);
registerServiceWorker();
