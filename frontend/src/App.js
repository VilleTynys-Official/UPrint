import React, { useState, useContext } from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrintersPage from './components/PrintersPage/PrintersPage';
import SettingsPage from './components/SettingsPage/SettingsPage';
import HistoryPage from './components/HistoryPage/HistoryPage';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import FileState from './context/file/FileState';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import AuthContext from './context/auth/AuthContext';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './utils/PrivateRoute';
import './App.css';

/** APP LOGIC EXPLAINED:
 * Basically:
 *  1. Signin and register pages redirect to home when AUTHENTICATED
 *  2. Application pages redirect to '/' when NOT AUTHENTICATED.
 *
 *
 */

// this is utility function for axios requests (sets token into headers).
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;
  console.log('isAuthenticated says: ', isAuthenticated);

  return (
    <FileState>
      <div className='App-container'>
        {isAuthenticated ? (
          <div className='Navbar-container'>
            <Navbar></Navbar>
          </div>
        ) : (
          ''
        )}
        <div className='Mother-container'>
          <Header></Header>
          <div className='Main'>
            <Switch>
              <Route
                exact
                path='/'
                render={() =>
                  isAuthenticated ? <Redirect to='/home' /> : <Login></Login>
                }
              ></Route>
              <Route
                exact
                path='/register'
                render={() =>
                  isAuthenticated ? (
                    <Redirect to='/home' />
                  ) : (
                    <Register></Register>
                  )
                }
              ></Route>
              <Route
                exact
                path='/home'
                render={() =>
                  isAuthenticated ? <HomePage></HomePage> : <Redirect to='/' />
                }
              ></Route>
              <Route
                exact
                path='/printers'
                render={() =>
                  isAuthenticated ? (
                    <PrintersPage></PrintersPage>
                  ) : (
                    <Redirect to='/' />
                  )
                }
              ></Route>
              <Route
                exact
                path='/settings'
                render={() =>
                  isAuthenticated ? (
                    <SettingsPage></SettingsPage>
                  ) : (
                    <Redirect to='/' />
                  )
                }
              ></Route>
              <Route
                exact
                path='/history'
                render={() =>
                  isAuthenticated ? (
                    <HistoryPage></HistoryPage>
                  ) : (
                    <Redirect to='/' />
                  )
                }
              ></Route>
            </Switch>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </FileState>
  );
};

// const App = () => {
//   const authContext = useContext(AuthContext);
//   const { isAuthenticated } = authContext;
//   console.log('isAuthenticated says: ', isAuthenticated);

//   return isAuthenticated ? (
//     <FileState>
//       <div className='App-container'>
//         <div className='Navbar-container'>
//           <Navbar></Navbar>
//         </div>
//         <div className='Mother-container'>
//           <Header></Header>
//           <div className='Main'>
//             <Switch>
//               <Route exact path='/home' component={HomePage}></Route>
//               <Route exact path='/printers' component={PrintersPage}></Route>
//               <Route exact path='/settings' component={SettingsPage}></Route>
//               <Route exact path='/history' component={HistoryPage}></Route>
//             </Switch>
//           </div>
//           <Footer></Footer>
//         </div>
//       </div>
//     </FileState>
//   ) : (
//     <div className='App-container'>
//       <Switch>
//         <Route exact path='/' component={Login}></Route>
//         <Route exact path='/register' component={Register}></Route>
//       </Switch>
//     </div>
//   );
// };

export default App;
