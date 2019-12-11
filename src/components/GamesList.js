import React from 'react';
import PropTypes from 'prop-types';

import GameCard from './GameCard';
import Message from './Message';

const GamesList = ({
  games,
  toggleFeatured,
  toggleDescription,
  deleteGame
}) => (
  <div className="ui four cards">
    {games.length === 0 ? (
      <Message
        header="header"
        content="message"
        type="info | success | error"
      />
    ) : (
      games.map(game => (
        <GameCard
          game={game}
          key={game._id}
          toggleFeatured={toggleFeatured}
          toggleDescription={toggleDescription}
          deleteGame={deleteGame}
        />
      ))
    )}
  </div>
);

GamesList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  toggleDescription: PropTypes.func.isRequired,
  deleteGame: PropTypes.func.isRequired
};

GamesList.defaultProps = {
  games: []
};

export default GamesList;
