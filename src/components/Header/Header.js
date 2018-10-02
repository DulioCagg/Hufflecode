import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header>
        <h1 className="center white"><Link to="/">Fun(key)</Link></h1>
        <input type="search"
          placeholder="Search..."
          className="f3 black w-40 center ba b--green bw1 bg-light-blue"
        />
        <p className='f3 dim white underline pa3 pointer'>Messages</p>
        <p className='f3 dim white underline pa3 pointer'>Profile</p>
      </header>
    </div>
  );
};

export default Header;