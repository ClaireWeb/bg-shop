import React from 'react';
import _orderBy from 'lodash/orderBy';

import GameForm from './GameForm';
import GamesList from './GamesList';
import TopNavigation from './TopNavigation';
import SignUp from './SignUp';
import Login from './Login';

import './App.css';

const publishers = [
  {
    _id: 1,
    name: 'Days of Wonder'
  },
  {
    _id: 2,
    name: 'Rio Grande Games'
  }
];

const games = [
  {
    _id: 1,
    publisher: 1,
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
    publisher: 1,
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
    publisher: 2,
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
//https://cf.geekdo-images.com/A9vPPhYgg1Tb3TxbSAw2j49-YmM=/fit-in/246x300/pic979889.jpg

class App extends React.Component {
  state = {
    games: [],
    showGameForm: false,
    selectedGame: {}
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

  showGameForm = () => this.setState({ showGameForm: true, selectedGame: {} });
  hideGameForm = () => this.setState({ showGameForm: false, selectedGame: {} });

  selectGameForEditing = game =>
    this.setState({ selectedGame: game, showGameForm: true });

  saveGame = game => (game._id ? this.updateGame(game) : this.addGame(game));

  addGame = game =>
    this.setState({
      games: this.sortGames([
        ...this.state.games,
        {
          ...game,
          // inutile si on envoie au serveur (BDD auto-incremente l'id)
          _id: this.state.games.length + 1
        }
      ]),
      showGameForm: false
    });

  updateGame = game =>
    this.setState({
      games: this.sortGames(
        this.state.games.map(item => (item._id === game._id ? game : item))
      ),
      showGameForm: false
    });

  deleteGame = game =>
    this.setState({
      games: this.state.games.filter(item => item._id !== game._id)
    });

  render() {
    const { games, showGameForm } = this.state;
    const numberOfColumns = showGameForm ? 'ten' : 'sixteen';
    return (
      <div className="ui container">
        <TopNavigation showGameForm={this.showGameForm} />

        <div className="ui stackable grid">
          {showGameForm && (
            <div className="six wide column">
              <GameForm
                publishers={publishers}
                cancel={this.hideGameForm}
                submit={this.saveGame}
                game={this.state.selectedGame}
              />
            </div>
          )}
          <div className={`${numberOfColumns} wide column`}>
            <GamesList
              games={games}
              toggleFeatured={this.toggleFeatured}
              toggleDescription={this.toggleDescription}
              editGame={this.selectGameForEditing}
              deleteGame={this.deleteGame}
            />
          </div>
        </div>

        <Login />
        <SignUp />

        <br />
      </div>
    );
  }
}

export default App;
