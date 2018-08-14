import React from 'react';

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
        <span>Welcome, Chrissy! ▾</span>
        <div class="dropdown-content">
          <p>Update Settings</p>
          <p>Log Out</p>
        </div>
      </div>
    </div>
  )
}

export default UserMenu;
