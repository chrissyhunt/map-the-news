import React, { Component } from 'react';
import '../App.css';
import '../NewsItemPositions.css'
import HeaderContainer from './HeaderContainer';
import LoadRows from '../components/NewsMapDisplay/LoadRows';
import LoadColumns from '../components/NewsMapDisplay/LoadColumns';
import ManageNewsItems from './ManageNewsItems';

class NewsMap extends Component {

  componentDidMount() {
    console.log("Component mounted")
  }

  render() {
    console.log("Component rendered")
    return (
      <React.Fragment>
        <div className="container">
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
