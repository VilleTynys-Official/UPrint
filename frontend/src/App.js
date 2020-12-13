import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import { Switch, Route } from 'react-router-dom';
import PrintersPage from './components/PrintersPage';
import SettingsPage from './components/SettingsPage';
import HistoryPage from './components/HistoryPage';

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Switch>
        <Route path="/home">
          <HomePage></HomePage>
        </Route>
        <Route path="/printers">
          <PrintersPage></PrintersPage>
        </Route>
        <Route path="/settings">
          <SettingsPage></SettingsPage>
        </Route>
        <Route path="/history">
          <HistoryPage></HistoryPage>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
