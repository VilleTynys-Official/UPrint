import React, { useContext } from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrintersPage from './components/PrintersPage/PrintersPage';
import SettingsPage from './components/SettingsPage/SettingsPage';
import HistoryPage from './components/HistoryPage/HistoryPage';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import FileState from './context/file/FileState';
import Login from './components/loginAndRegister/Login';
import Register from './components/loginAndRegister/Register';
import AuthContext from './context/auth/AuthContext';
import setAuthToken from './utils/setAuthToken';
import './App.css';

/** APP LOGIC EXPLAINED:
 * Basically:
 *  1. login and register pages redirect to home when AUTHENTICATED.
 *  2. if NOT AUTHENTICATED, Application pages redirect to '/' (which is login).
 *
 *
 */

// this is utility function for axios requests (sets token into headers).
// it is here to make sure that the token is always set if it exists in the localStorage.
if (sessionStorage.token) {
  setAuthToken(sessionStorage.token);
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
          {isAuthenticated ? <Header></Header> : ''}
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

export default App;
