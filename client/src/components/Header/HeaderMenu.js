import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMenu = (props) => {
  console.log('HeaderMenu props:', props)

  return (
    <div class="header-right">
      <p class="menu">
        Advanced Search
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Settings
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="#" onClick={props.logout}>Logout</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; About
      </p>
    </div>
  )
}

export default HeaderMenu;
