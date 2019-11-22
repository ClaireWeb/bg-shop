import React from 'react';
import _orderBy from 'lodash/orderBy';
import GamesList from './GamesList';
import GameForm from './GameForm';

import './App.css';

const games = [
  {
    _id: 1,
    featured: true,
    described: false,
    name: 'Quadropolis',
    thumbnail:
      'https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg',
    price: 3299,
    players: '2-4',
    duration: 60,
    description:
      'Awesome Quadropolis game!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    _id: 2,
    featured: false,
    described: false,
    name: 'Five Tribes',
    thumbnail:
      'https://cf.geekdo-images.com/o3D15fBxzTt3k2IFZ2u2Xr7Wlyk=/fit-in/246x300/pic2055255.jpg',
    price: 5100,
    players: '2-4',
    duration: 80,
    description:
      'Awesome Five Tribes Game!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    _id: 3,
    featured: false,
    described: false,
    name: 'Roll for the Galaxy',
    thumbnail:
      'https://cf.geekdo-images.com/Vi3pvbq9sLk_OHzxio8lzjB_77k=/fit-in/246x300/pic1473629.jpg',
    price: 2999,
    players: '2-5',
    duration: 45,
    description:
      'Awesome Roll for the Galaxy Game!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];

class App extends React.Component {
  state = {
    games: []
  };

  componentDidMount() {
    this.setState({
      games: this.sortGames(games)
    });
  }

  sortGames(games) {
    return _orderBy(games, ['featured', 'name'], ['desc', 'asc']);
  }

  toggleFeatured = gameId =>
    this.setState({
      games: this.sortGames(
        this.state.games.map(game =>
          gameId === game._id ? { ...game, featured: !game.featured } : game
        )
      )
    });

  toggleDescription = gameId =>
    this.setState({
      games: this.state.games.map(game =>
        gameId === game._id ? { ...game, described: !game.described } : game
      )
    });

  render() {
    return (
      <div className="ui container">
        <GameForm />
        <br />
        <GamesList
          games={this.state.games}
          toggleFeatured={this.toggleFeatured}
          toggleDescription={this.toggleDescription}
        />
      </div>
    );
  }
}

export default App;
