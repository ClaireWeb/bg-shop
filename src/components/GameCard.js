import React from 'react';
import PropTypes from 'prop-types';

import Price from './Price';
import Featured from './Featured';
import GameDescription from './GameDescription';

class GameCard extends React.Component {
  state = {
    showConfirmation: false
  };

  showConfirmation = () => this.setState({ showConfirmation: true });
  hideConfirmation = () => this.setState({ showConfirmation: false });

  render() {
    const {
      game,
      toggleFeatured,
      toggleDescription,
      editGame,
      deleteGame
    } = this.props;
    return (
      <div className="ui card">
        {!game.described ? (
          <div className="image">
            <Price game={game} />
            <Featured
              featured={game.featured}
              toggleFeatured={toggleFeatured}
              gameId={game._id}
            />
            <img src={game.thumbnail} alt="Game cover" />
          </div>
        ) : (
          <div className="ui justified container description">
            <p>{game.description}</p>
          </div>
        )}
        <div className="content">
          <a href="www.google.com" className="header">
            {game.name}
          </a>
          <div className="meta caption">
            <div className="game__icon">
              <i className="icon users" /> {game.players}&nbsp;
              <i className="icon wait" /> {game.duration} min.
            </div>
            <GameDescription
              described={game.described}
              toggleDescription={toggleDescription}
              gameId={game._id}
            />
          </div>

          <div className="extra content">
            {this.state.showConfirmation ? (
              <div className="ui two buttons">
                <a
                  className="ui red basic button"
                  onClick={() => deleteGame(game)}
                >
                  <i className="ui icon check" /> YES
                </a>
                <a
                  className="ui grey basic button"
                  onClick={this.hideConfirmation}
                >
                  <i className="ui icon close" /> NO
                </a>
              </div>
            ) : (
              <div className="ui two buttons">
                <a
                  className="ui green basic button"
                  onClick={() => editGame(game)}
                >
                  <i className="ui icon edit"></i>
                </a>
                <a
                  className="ui red basic button"
                  onClick={this.showConfirmation}
                >
                  <i className="ui icon trash"></i>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

GameCard.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    featured: PropTypes.bool.isRequired
  }).isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  editGame: PropTypes.func.isRequired,
  deleteGame: PropTypes.func.isRequired
};

export default GameCard;
