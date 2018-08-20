import React, { Component } from 'react';
import './App.css';
import './NewsItemPositions.css'
import HeaderContainer from './containers/HeaderContainer';
import LoadRows from './components/NewsMapDisplay/LoadRows';
import LoadColumns from './components/NewsMapDisplay/LoadColumns';
import ManageNewsItems from './containers/ManageNewsItems';

class NewsMap extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="container">
          <HeaderContainer />
          <LoadRows />
          <LoadColumns />
          <ManageNewsItems />
        </div>

      </React.Fragment>
    );
  }
}

export default NewsMap;
