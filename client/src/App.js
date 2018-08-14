import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderContainer from './containers/HeaderContainer';

class App extends Component {
  render() {
    return (
      <div class="container">
        <HeaderContainer />
      </div>
    );
  }
}

export default App;
