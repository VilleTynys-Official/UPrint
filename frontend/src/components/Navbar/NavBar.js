import React from 'react';
import { Link } from 'react-router-dom';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

const NavBar = () => {
  return (
    <div className='NavBar'>
      <Link className='Link' to='/home'>
        Home
      </Link>
      <Link className='Link' to='/printers'>
        Printers
      </Link>
      <Link className='Link' to='/history'>
        History
      </Link>
      <Link className='Link' to='/settings'>
        Settings
      </Link>
      <Link className='Link' to='/logout'>
        Logout
      </Link>
    </div>
  );
};

export default NavBar;
