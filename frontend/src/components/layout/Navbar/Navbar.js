import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import ReceiptIcon from '@material-ui/icons/Receipt';
import MapIcon from '@material-ui/icons/Map';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import '../../../App.css';
import AuthContext from '../../../context/auth/AuthContext';
import FileContext from '../../../context/file/FileContext';

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const fileContext = useContext(FileContext);
  const { logoutUser } = authContext;
  const { clearFiles } = fileContext;

  const onLogout = () => {
    logoutUser();
    clearFiles();
  };

  return (
    <div className='Navbar'>
      <NavLink className='Link' activeClassName='ActiveLink' to='/home'>
        {<FileCopyIcon fontSize={'large'} />}
        <p className='Link-text'>My Files</p>
      </NavLink>
      <NavLink className='Link' activeClassName='ActiveLink' to='/printers'>
        {<MapIcon fontSize={'large'} />}
        <p className='Link-text'>Printers</p>
      </NavLink>
      <NavLink className='Link' activeClassName='ActiveLink' to='/history'>
        {<ReceiptIcon fontSize={'large'} />}
        <p className='Link-text'>History</p>
      </NavLink>
      <NavLink className='Link' activeClassName='ActiveLink' to='/settings'>
        {<SettingsIcon fontSize={'large'} />}
        <p className='Link-text'>Settings</p>
      </NavLink>
      <NavLink
        onClick={() => onLogout()}
        className='Link'
        activeClassName='ActiveLink'
        to='/home'
      >
        {<ExitToAppIcon fontSize={'large'} />}
        <p className='Link-text'>Logout</p>
      </NavLink>
    </div>
  );
};

export default Navbar;
