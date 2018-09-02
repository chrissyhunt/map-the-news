import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMenu = (props) => {
  return (
    <div class="header-right">
      <p class="menu">
        <a href="#" onClick={props.toggleAdvancedSearch}>Advanced Search</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Settings
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="#" onClick={props.logout}>Logout</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; About
      </p>
    </div>
  )
}

export default HeaderMenu;
