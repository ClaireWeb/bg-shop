import React from 'react';
import PropTypes from 'prop-types';

const Featured = ({ featured, toggleFeatured, gameId }) => (
  <span>
    {featured ? (
      <a
        href="#"
        onClick={() => toggleFeatured(gameId)}
        className="ui yellow corner label"
      >
        <i className="star icon"></i>
      </a>
    ) : (
      <a
        href="#"
        onClick={() => toggleFeatured(gameId)}
        className="empty ui corner label"
      >
        <i className="star icon"></i>
      </a>
    )}
  </span>
);

Featured.propTypes = {
  featured: PropTypes.bool.isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  gameId: PropTypes.number.isRequired
};

export default Featured;
