import React from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import HomePage from './components/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import PrintersPage from './components/PrintersPage/PrintersPage';
import SettingsPage from './components/SettingsPage/SettingsPage';
import HistoryPage from './components/HistoryPage/HistoryPage';

const App = () => {
  return (
    <div className='App'>
      <div className='Header'>Header</div>
      <div className='NavBar-Main-container'>
        <div className='NavBar-container'>
          <NavBar></NavBar>
        </div>
        <div className='Main-container'>
          <Switch>
            <Route path='/home'>
              <HomePage></HomePage>
            </Route>
            <Route path='/printers'>
              <PrintersPage></PrintersPage>
            </Route>
            <Route path='/settings'>
              <SettingsPage></SettingsPage>
            </Route>
            <Route path='/history'>
              <HistoryPage></HistoryPage>
            </Route>
          </Switch>
        </div>
      </div>
      <div className='Footer'>
        <p>Footer</p>
      </div>
    </div>
  );
};

export default App;
