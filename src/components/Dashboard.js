import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <div>This is the dashboard!!</div>
        <div><RaisedButton label="Click me!" /></div>
      </div>
    );
  }
}

export default Dashboard;
