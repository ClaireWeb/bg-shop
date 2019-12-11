import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import TopNavigation from './TopNavigation';

class App extends React.Component {
  state = {};
  render() {
    return (
      <div className="ui container">
        <TopNavigation />
        <Route exact path="/" component={HomePage} />
      </div>
    );
  }
}

export default App;
