import React, { Component } from 'react';

class GameForm extends Component {
  state = {};
  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label htmlFor="name">Game Title</label>
          <input type="text" id="name" placeholder="Full game title" />
        </div>
        <button className="ui button" type="submit">
          Create
        </button>
      </form>
    );
  }
}

export default GameForm;
