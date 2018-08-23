import React from 'react';
import { Link } from 'react-router-dom';

const UserMenu = (props) => {
  return (
    <div class="header-right">
      <div class="dropdown">
        <span>Saved Searches ▾</span>
        <div class="dropdown-content">
          <p>Search term</p>
          <p>Search term</p>
        </div>
      </div>
      <div class="dropdown">
        <span>Welcome, {props.userInfo.user.firstName}! ▾</span>
        <div class="dropdown-content">
          <p><Link to={'/settings'}>Update Settings</Link></p>
          <p><a type="button" onClick={props.logout()}>Log Out</a></p>
        </div>
      </div>
    </div>
  )
}

export default UserMenu;
