import React from 'react';
import moment from 'moment';
import { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../components/Header/Logo';
import BasicSearch from '../components/Header/BasicSearch';
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
      searchCompleted: false,
      searchTerms: {
        q: '',
        startDate: moment().format("YYYY-MM-DD"),
        endDate: moment().format("YYYY-MM-DD")
      }
    }
  }

  componentDidMount() {
    if (!this.props.userInfo.user && !this.props.userInfo.loading) {
      this.props.getUser()
    }
  }

  handleSearchQueryChange = event => {
    this.setState({
      searchTerms: {
        ...this.state.searchTerms,
        q: event.target.value
      }
    })
  }

  handleStartDateChange = event => {
    this.setState({
      searchTerms: {
        ...this.state.searchTerms,
        startDate: event.target.value
      }
    })
  }

  handleEndDateChange = event => {
    this.setState({
      searchTerms: {
        ...this.state.searchTerms,
        endDate: event.target.value
      }
    })
  }

  handleSearchSubmit = event => {
    event.preventDefault();
    this.props.fetchNews(this.state.searchTerms)
    this.setState({searchCompleted: true})
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

  searchCompleted = () => {
    return (this.state.searchCompleted) ? <SecondarySearchBox saveSearch={this.saveSearch} backOneDay={this.backOneDay} backOneWeek={this.backOneWeek} forwardOneDay={this.forwardOneDay} forwardOneWeek={this.forwardOneWeek} /> : null;
  }

  userLoaded = () => {
    return (this.props.userInfo.user && !this.props.userInfo.loading) ? <UserMenu userInfo={this.props.userInfo} logout={this.props.logout} /> : null;
  }

  render() {
    return (
      <div class="row header-row">
        <div class="header">
          <BasicSearch />
          <HeaderMenu logout={this.props.logout} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps, { fetchNews, saveSearch, getUser, logout })(HeaderContainer);
