import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import TopNavigation from './TopNavigation';
import GamesPage from './GamesPage';
import ShowGamePage from './ShowGamePage';

class App extends React.Component {
  state = {};
  render() {
    return (
      <div className="ui container">
        <TopNavigation />
        <Route exact path="/" component={HomePage} />
        <Route path="/games" component={GamesPage} />
        <Route path="/game/:_id" exact component={ShowGamePage} />
      </div>
    );
  }
}

export default App;
