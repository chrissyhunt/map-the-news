import React from 'react';
import moment from 'moment';
import { Component } from 'react';
import { connect } from 'react-redux';
import AdvancedOptions from './AdvancedOptions.js';
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
      advancedOptionsActive: false,
      searchCompleted: false,
      topStoriesMode: true
    }
  }

  componentDidMount() {
    if (!this.props.userInfo.user && !this.props.userInfo.loading) {
      this.props.getUser()
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

  toggleAdvancedOptions = (event) => {
    event.preventDefault();
    return this.setState({
      advancedOptionsActive: !this.state.advancedOptionsActive
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="row header-row">
          <div className="header">
            <div className="header-left">
              <span className="title">MAP THE NEWS</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {!this.state.advancedOptionsActive && <BasicSearch />}
            </div>
            <HeaderMenu logout={this.props.logout} toggleAdvancedOptions={this.toggleAdvancedOptions} />
          </div>
        </div>
        {this.state.advancedOptionsActive && <AdvancedOptions />}
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
