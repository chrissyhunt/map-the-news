import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMenu = (props) => {
  const advancedSearchTitle = props.advancedOptionsActive ? 'Close Search Options' : 'Search Options'
  return (
    <div class="header-right">
      <p class="menu">
        <a href="#" onClick={props.toggleAdvancedOptions}>{advancedSearchTitle}</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Settings
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="#" onClick={props.logout}>Logout</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; About
      </p>
    </div>
  )
}

export default HeaderMenu;
