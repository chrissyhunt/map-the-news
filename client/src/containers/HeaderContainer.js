import React from 'react';
import Logo from '../components/Header/Logo';
import UserMenu from '../components/Header/UserMenu';
import SearchForm from '../components/Header/SearchForm';
import SecondarySearchBox from '../components/Header/SecondarySearchBox';

class HeaderContainer extends Component {
  constructor() {
    this.state = {
      searchCompleted: false
    }
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
          <SearchForm />
          {searchCompleted()}
        </div>
      </div>
    )
  }
}

export default HeaderContainer;
