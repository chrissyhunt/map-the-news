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
      searchCompleted: true
    }
  }

  searchCompleted() {
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
          <SearchForm />
          {this.searchCompleted()}
        </div>
      </div>
    )
  }
}

export default HeaderContainer;
