import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Dashboard />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
