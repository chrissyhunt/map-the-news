import React from 'react';
import moment from 'moment';
import { Component } from 'react';
import { connect } from 'react-redux';
import AdvancedOptions from '../AdvancedOptions/AdvancedOptions.js';
import Logo from '../../components/Header/Logo';
import BasicSearch from './BasicSearch';
import HeaderMenu from '../../components/Header/HeaderMenu';
import SearchForm from '../../components/Header/SearchForm';
import { fetchNews, saveSearch, activateSearchOptionsBox, deactivateSearchOptionsBox, activateUserSettingsBox } from '../../actions/News';
import { getUser, logout } from '../../actions/Users';

class HeaderContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchCompleted: false,
      topStoriesMode: true
    }
  }

  componentDidMount() {
    if (!this.props.userInfo.user && !this.props.userInfo.loading) {
      this.props.getUser()
    }
  }

  toggleAdvancedOptions = (event) => {
    event.preventDefault();
    if (this.props.application.searchOptionsBoxOpen) {
      this.props.deactivateSearchOptionsBox();
    } else {
      this.props.activateSearchOptionsBox();
    }
  }

  activateUserSettingsBox = () => {
    this.props.activateUserSettingsBox();
  }

  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <div className="row header-row">
          <div className="header">
            <div className="header-left">
              <span className="title">MAP THE NEWS</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {!this.props.application.searchOptionsBoxOpen && <BasicSearch />}
            </div>
            <HeaderMenu logout={this.props.logout} toggleAdvancedOptions={this.toggleAdvancedOptions} advancedOptionsActive={this.props.application.searchOptionsBoxOpen} activateUserSettingsBox={this.activateUserSettingsBox}/>
          </div>
        </div>
        {this.props.application.searchOptionsBoxOpen && <AdvancedOptions />}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
    searchInfo: state.searchInfo,
    application: state.application
  }
}

export default connect(mapStateToProps, { fetchNews, saveSearch, getUser, logout, activateSearchOptionsBox, deactivateSearchOptionsBox, activateUserSettingsBox })(HeaderContainer);
