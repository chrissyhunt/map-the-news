import React, { Component } from 'react';
import './App.css';
import './NewsItemPositions.css'
import HeaderContainer from './containers/HeaderContainer';
import LoadRows from './components/NewsMapDisplay/LoadRows';
import LoadColumns from './components/NewsMapDisplay/LoadColumns';
import ManageNewsItems from './containers/ManageNewsItems';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="container">
          <HeaderContainer />
          <LoadRows />
          <LoadColumns />
        </div>
        <ManageNewsItems />
      </React.Fragment>
    );
  }
}

export default App;
