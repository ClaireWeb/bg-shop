import React from 'react';

const GameDescription = ({ described, toggleDescription, gameId }) => {
  return (
    <span>
      {!described ? (
        <a onClick={() => toggleDescription(gameId)} className="text__icon">
          <i className="ui grey icon eye" />
        </a>
      ) : (
        <a onClick={() => toggleDescription(gameId)} className="text__icon">
          <i className="ui green icon eye" />
        </a>
      )}
    </span>
  );
};

export default GameDescription;
