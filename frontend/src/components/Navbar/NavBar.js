import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import ReceiptIcon from '@material-ui/icons/Receipt';
import MapIcon from '@material-ui/icons/Map';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import '../../App.css';

const NavBar = () => {
  return (
    <div className='NavBar'>
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
      <NavLink className='Link' activeClassName='ActiveLink' to='/logout'>
        {<ExitToAppIcon fontSize={'large'} />}
        <p className='Link-text'>Logout</p>
      </NavLink>
    </div>
  );
};

export default NavBar;

// const NavBar = () => {
//   return (
//     <div className='NavBar'>
//       <List>
//         <ListItem>
//           <ListItemIcon>
//             <HomeIcon />
//           </ListItemIcon>
//           <Link to='/home'>Home</Link>
//         </ListItem>
//         <ListItem>
//           <ListItemIcon>
//             <MapIcon />
//           </ListItemIcon>
//           <Link to='/printers'>Printers</Link>
//         </ListItem>
//         <ListItem>
//           <ListItemIcon>
//             <FileCopyIcon />
//           </ListItemIcon>
//           <Link to='/history'>History</Link>
//         </ListItem>
//         <ListItem>
//           <ListItemIcon>
//             <SettingsIcon />
//           </ListItemIcon>
//           <Link to='/settings'>Settings</Link>
//         </ListItem>
//         <ListItem>
//           <ListItemIcon>
//             <ExitToAppIcon />
//           </ListItemIcon>
//           <Link to='/logout'>Logout</Link>
//         </ListItem>
//       </List>
//     </div>
//   );
// };

// export default NavBar;
