import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Link to='/home'>Home</Link>
      <Link to='/printers'>Printers</Link>
      <Link to='/history'>History</Link>
      <Link to='/settings'>Settings</Link>
      <Link to='/logout'>Logout</Link>
    </div>
  );
};

export default NavBar;
