import React from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import HomePage from './components/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import PrintersPage from './components/PrintersPage/PrintersPage';
import SettingsPage from './components/SettingsPage/SettingsPage';
import HistoryPage from './components/HistoryPage/HistoryPage';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className='App-container'>
      <div className='NavBar-Main-container'>
        <div className='NavBar-container'>
          <NavBar></NavBar>
        </div>
      </div>
      <div className='Mother-container'>
        <Header></Header>
        <div className='Main'>
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
        <div className='Footer'>
          <p>Footer</p>
        </div>
      </div>
    </div>
  );
};

export default App;
