import React from 'react';
import moment from 'moment';
import { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../components/Header/Logo';
import UserMenu from '../components/Header/UserMenu';
import SearchForm from '../components/Header/SearchForm';
import SecondarySearchBox from '../components/Header/SecondarySearchBox';

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
    this.fetchNews(this.state.searchTerms);
  }

  fetchNews = searchTerms => {
    fetch('http://localhost:3000/api/news_request', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(searchTerms)
    })
    .then(response => response.json())
    .then(json => this.props.importNewsItems(json))
    .then(this.setState({searchCompleted: true}))
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
    this.fetchNews(this.state.searchTerms);
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
    console.log('updated state: ', this.state)
    this.fetchNews(this.state.searchTerms);
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
    console.log('updated state: ', this.state)
    this.fetchNews(this.state.searchTerms);
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
    console.log('updated state: ', this.state)
    this.fetchNews(this.state.searchTerms);
  }

  searchCompleted = () => {
    return (this.state.searchCompleted) ? <SecondarySearchBox backOneDay={this.backOneDay} backOneWeek={this.backOneWeek} forwardOneDay={this.forwardOneDay} forwardOneWeek={this.forwardOneWeek} /> : null;
  }

  render() {
    return (
      <div class="row header-row">
        <div class="header">
          <Logo />
          <UserMenu />
        </div>
        <div class="search">
          <SearchForm searchTerms={this.state.searchTerms} handleSearchQueryChange={this.handleSearchQueryChange} handleStartDateChange={this.handleStartDateChange} handleEndDateChange={this.handleEndDateChange} handleSearchSubmit={this.handleSearchSubmit} />
          {this.searchCompleted()}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    importNewsItems: (response) => dispatch({ type: "IMPORT_NEWS_ITEMS", payload: response })
  }
}

export default connect(null, mapDispatchToProps)(HeaderContainer);
