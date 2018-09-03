import React, { Component } from 'react';
import '../../App.css';
import '../../NewsItemPositions.css'
import HeaderContainer from '../Header/HeaderContainer';
import LoadRows from '../../components/NewsMapDisplay/LoadRows';
import LoadColumns from '../../components/NewsMapDisplay/LoadColumns';
import ManageNewsItems from './ManageNewsItems';
import NewsModal from '../NewsModal/NewsModal';
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
          {this.props.application.activeNewsSource && <NewsModal />}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    application: state.application
  }
}

export default connect(mapStateToProps)(NewsMap);
