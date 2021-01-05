import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

const Header = () => {
  return (
    <div className='Header'>
      <NavLink className='Link' activeClassName='ActiveLink' to='/logout'>
        <AccountCircleSharpIcon fontSize='large'></AccountCircleSharpIcon>
      </NavLink>
    </div>
  );
};

export default Header;
