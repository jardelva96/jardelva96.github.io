import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <h1>FaceGeek</h1>
      <div className="header__nav">
        <a href="/">Home</a>
        <a href="/profile">Profile</a>
        <a href="/groups">Groups</a>
        <a href="/settings">Settings</a>
      </div>
    </div>
  );
}

export default Header;
