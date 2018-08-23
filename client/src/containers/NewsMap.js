import React, { Component } from 'react';
import '../App.css';
import '../NewsItemPositions.css'
import HeaderContainer from './HeaderContainer';
import LoadRows from '../components/NewsMapDisplay/LoadRows';
import LoadColumns from '../components/NewsMapDisplay/LoadColumns';
import ManageNewsItems from './ManageNewsItems';
import { getUser } from '../actions/Users';
import { connect } from 'react-redux';

class NewsMap extends Component {

  componentDidMount() {
    if (!this.props.userInfo.user && !this.props.userInfo.loading) {
      this.props.getUser()
    }
  }

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

export default connect(mapStateToProps, { getUser })(NewsMap);
