import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

const Header = ({ onSearchChange, onLogout }) => {
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
        <button className="tc black" onClick={() => onLogout()} >Log out</button>
      </header>
    </div>
  );
};

export default Header;
