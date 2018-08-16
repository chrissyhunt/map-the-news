import React from 'react';
import { Component } from 'react';
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
        startDate: '',
        endDate: ''
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
    .then(json => console.log(json))
  }

  searchCompleted = () => {
    return (this.state.searchCompleted) ? <SecondarySearchBox /> : null;
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

export default HeaderContainer;
