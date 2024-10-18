import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Explore</h2>
      <ul>
        <li><a href="#">Programming Groups</a></li>
        <li><a href="#">JavaScript Enthusiasts</a></li>
        <li><a href="#">Python Lovers</a></li>
        <li><a href="#">React Community</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
