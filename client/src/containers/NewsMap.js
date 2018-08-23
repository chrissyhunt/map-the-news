import React, { Component } from 'react';
import '../App.css';
import '../NewsItemPositions.css'
import HeaderContainer from './HeaderContainer';
import LoadRows from '../components/NewsMapDisplay/LoadRows';
import LoadColumns from '../components/NewsMapDisplay/LoadColumns';
import ManageNewsItems from './ManageNewsItems';
import { connect } from 'react-redux';

class NewsMap extends Component {

  render() {
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

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps)(NewsMap);
