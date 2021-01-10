import React, { useState, useContext } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import PrintersPage from './components/PrintersPage/PrintersPage';
import SettingsPage from './components/SettingsPage/SettingsPage';
import HistoryPage from './components/HistoryPage/HistoryPage';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import FileState from './context/file/FileState';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import AuthContext from './context/auth/AuthContext';

/** APP LOGIC EXPLAINED:
 * Basically, the application is divided into two depending if user is signed in or not:
 *  1. Signin and register pages for those who are NOT AUTHENTICATED
 *  2. Application pages for those who are AUTHENTICATED.
 */

const App = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;
  console.log('isAuthenticated says: ', isAuthenticated);

  return isAuthenticated ? (
    <FileState>
      <div className='App-container'>
        <div className='Navbar-container'>
          <Navbar></Navbar>
        </div>
        <div className='Mother-container'>
          <Header></Header>
          <div className='Main'>
            <Switch>
              <Route exact path='/home' component={HomePage}></Route>
              <Route exact path='/printers' component={PrintersPage}></Route>
              <Route exact path='/settings' component={SettingsPage}></Route>
              <Route exact path='/history' component={HistoryPage}></Route>
            </Switch>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </FileState>
  ) : (
    <div className='App-container'>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/register' component={Register}></Route>
      </Switch>
    </div>
  );
};

export default App;
