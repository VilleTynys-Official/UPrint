import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import PrintersPage from './components/PrintersPage/PrintersPage';
import SettingsPage from './components/SettingsPage/SettingsPage';
import HistoryPage from './components/HistoryPage/HistoryPage';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

const App = () => {
  return (
    <div className='App-container'>
      <div className='Navbar-Main-container'>
        <div className='Navbar-container'>
          <Navbar></Navbar>
        </div>
      </div>
      <div className='Mother-container'>
        <Header></Header>
        <div className='Main'>
          <Switch>
            <Route path='/home' component={HomePage}></Route>
            <Route path='/printers' component={PrintersPage}></Route>
            <Route path='/settings' component={SettingsPage}></Route>
            <Route path='/history' component={HistoryPage}></Route>
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
