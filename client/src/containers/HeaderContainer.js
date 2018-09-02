import React from 'react';
import moment from 'moment';
import { Component } from 'react';
import { connect } from 'react-redux';
import AdvancedSearch from './AdvancedSearch.js';
import Logo from '../components/Header/Logo';
import BasicSearch from './BasicSearch';
import UserMenu from '../components/Header/UserMenu';
import HeaderMenu from '../components/Header/HeaderMenu';
import SearchForm from '../components/Header/SearchForm';
import SecondarySearchBox from '../components/Header/SecondarySearchBox';
import { fetchNews, saveSearch } from '../actions/News';
import { getUser, logout } from '../actions/Users';

class HeaderContainer extends Component {
  constructor() {
    super();
    this.state = {
      advancedSearchActive: false,
      searchCompleted: false
    }
  }

  backOneDay = (event) => {
    const newDate = moment(this.state.searchTerms.endDate).subtract(1, 'days').format("YYYY-MM-DD")
    this.setState({
      searchTerms: {
        ...this.state.searchTerms,
        endDate: newDate,
        startDate: newDate
      }
    })
    console.log('updated state: ', this.state)
    this.props.fetchNews(this.state.searchTerms);
  }

  backOneWeek = (event) => {
    const newDate = moment(this.state.searchTerms.endDate).subtract(1, 'weeks').format("YYYY-MM-DD")
    this.setState({
      searchTerms: {
        ...this.state.searchTerms,
        endDate: newDate,
        startDate: newDate
      }
    })
    this.props.fetchNews(this.state.searchTerms);
  }

  forwardOneDay = (event) => {
    const newDate = moment(this.state.searchTerms.endDate).add(1, 'days').format("YYYY-MM-DD")
    this.setState({
      searchTerms: {
        ...this.state.searchTerms,
        endDate: newDate,
        startDate: newDate
      }
    })
    this.props.fetchNews(this.state.searchTerms);
  }

  forwardOneWeek = (event) => {
    const newDate = moment(this.state.searchTerms.endDate).add(1, 'weeks').format("YYYY-MM-DD")
    this.setState({
      searchTerms: {
        ...this.state.searchTerms,
        endDate: newDate,
        startDate: newDate
      }
    })
    this.props.fetchNews(this.state.searchTerms);
  }

  saveSearch = () => {
    this.props.saveSearch(this.state.searchTerms);
  }

  toggleAdvancedSearch = (event) => {
    event.preventDefault();
    return this.setState({
      advancedSearchActive: !this.state.advancedSearchActive
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="row header-row">
          <div className="header">
            <div className="header-left">
              <span className="title">MAP THE NEWS</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {!this.state.advancedSearchActive && <BasicSearch />}
            </div>
            <HeaderMenu logout={this.props.logout} toggleAdvancedSearch={this.toggleAdvancedSearch} />
          </div>
        </div>
        {this.state.advancedSearchActive && <AdvancedSearch />}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
    searchInfo: state.searchInfo
  }
}

export default connect(mapStateToProps, { fetchNews, saveSearch, getUser, logout })(HeaderContainer);
