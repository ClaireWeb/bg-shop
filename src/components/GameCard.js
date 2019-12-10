import React from 'react';
import PropTypes from 'prop-types';

import Price from './Price';
import Featured from './Featured';
import GameDescription from './GameDescription';

const GameCard = ({ game, toggleFeatured, toggleDescription }) => (
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
    </div>
  </div>
);

GameCard.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    featured: PropTypes.bool.isRequired
  }).isRequired,
  toggleFeatured: PropTypes.func.isRequired
};

export default GameCard;
