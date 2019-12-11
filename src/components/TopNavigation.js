import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const TopNavigation = ({ showGameForm }) => (
  <div className="ui secondary pointing menu">
    <NavLink exact to="/" className="item">
      BGShop
    </NavLink>
    <NavLink exact to="/games" className="item">
      Games
    </NavLink>
    <NavLink exact to="/games/new" className="item">
      <i className="icon plus" />
      Add New Game
    </NavLink>
  </div>
);

TopNavigation.propTypes = {
  showGameForm: PropTypes.func.isRequired
};

export default TopNavigation;
