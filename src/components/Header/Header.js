import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

const Header = ({ onSearchChange }) => {
  let faS = {
    'fontSize': '80px',
  }
  return (
    <div className="header">
      <header>
        <h1 className="tc white"><Link to="/">Fun(key)</Link></h1>
        <input type="search"
          placeholder="Search..."
          className="f3 black w-40 tc ba b--black bw1 bg-light-green"
          onChange={onSearchChange}
        />
        <Link to="/profile/1"><i className="fas fa-user-circle white tc" style={faS}></i></Link>
      </header>
    </div>
  );
};

export default Header;
