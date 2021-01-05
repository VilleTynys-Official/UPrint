import React, { useState } from 'react';
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

const App = () => {
  const [isLoggedin, setLoggedin] = useState(false);
  console.log('is user logged in: ', isLoggedin);

  return isLoggedin ? (
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
    <div>
      <button onClick={() => setLoggedin(true)}>Login</button>
    </div>
  );
};

export default App;
