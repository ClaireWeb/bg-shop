import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactImageFallback from 'react-image-fallback';

// const tags = [
//   { _id: 1, name: 'dice' },
//   { _id: 2, name: 'economic' },
//   { _id: 3, name: 'family' }
// ];

// const genres = [
//   { _id: 1, name: 'abstract' },
//   { _id: 2, name: 'euro' },
//   { _id: 3, name: 'ameritrash' }
// ];

class GameForm extends Component {
  state = {
    name: '',
    description: '',
    price: 0,
    duration: 0,
    players: '',
    featured: false,
    // tags: [],
    // genre: 1,
    publisher: 0,
    thumbnail: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = e =>
    this.setState({
      [e.target.name]:
        e.target.type === 'number'
          ? parseInt(e.target.value, 10)
          : e.target.value
    });

  handleCheckboxChange = e =>
    this.setState({ [e.target.name]: e.target.checked });

  // toggleTag = tag =>
  //   this.state.tags.includes(tag._id)
  //     ? this.setState({ tags: this.state.tags.filter(id => id !== tag._id) })
  //     : this.setState({ tags: [...this.state.tags, tag._id] });

  // handleGenreChange = genre => this.setState({ genre: genre._id });

  render() {
    const {
      name,
      description,
      price,
      duration,
      players,
      thumbnail
    } = this.state;
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="ui grid">
          <div className="twelve wide column">
            <div className="field">
              <label htmlFor="name">Game Title</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full game title"
                value={name}
                onChange={this.handleChange}
              />
            </div>

            <div className="field">
              <label htmlFor="description">Game Description</label>
              <textarea
                type="text"
                id="description"
                name="description"
                placeholder="Game description"
                value={description}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="four wide column">
            {/* {thumbnail ? (
              <img src={thumbnail} alt="Thumbnail" className="ui image" />
            ) : (
              <img
                src="http://via.placeholder.com/250x250"
                alt="Thumbnail"
                className="ui image"
              />
            )} */}
            <ReactImageFallback
              src={thumbnail}
              fallbackImage="http://via.placeholder.com/250x250"
              alt="Thumbnail"
              className="ui image"
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="thumbnail">Thumbnail</label>
          <input
            type="text"
            id="thumbnail"
            name="thumbnail"
            placeholder="Image URL"
            value={thumbnail}
            onChange={this.handleChange}
          />
        </div>

        <div className="three fields">
          <div className="field">
            <label htmlFor="price">Price (in cents)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={this.handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="duration">Duration (in minutes)</label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={duration}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="players">Players</label>
            <input
              type="text"
              id="players"
              name="players"
              value={players}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="inline field">
          <input
            id="featured"
            name="featured"
            type="checkbox"
            checked={this.state.featured}
            onChange={this.handleCheckboxChange}
          />
          <label htmlFor="featured">Featured?</label>
        </div>

        {/* <div className="field">
          <label>Tags</label>
          {tags.map(tag => (
            <div key={tag._id} className="inline field">
              <input
                id={`tag-${tag._id}`}
                type="checkbox"
                checked={this.state.tags.includes(tag._id)}
                onChange={() => this.toggleTag(tag)}
              />
              <label htmlFor={`tag-${tag._id}`}>{tag.name}</label>
            </div>
          ))}
        </div>

        <div className="field">
          <label>Genres</label>
          {genres.map(genre => (
            <div key={genre._id} className="inline field">
              <input
                id={`genre-${genre._id}`}
                type="radio"
                checked={this.state.genre === genre._id}
                onChange={() => this.handleGenreChange(genre)}
              />
              <label htmlFor={`genre-${genre._id}`}>{genre.name}</label>
            </div>
          ))}
        </div> */}

        <div className="field">
          <label>Publishers</label>
          <select
            name="publisher"
            value={this.state.publisher}
            onChange={this.handleChange}
          >
            <option value="0">Choose Publisher</option>
            {this.props.publishers.map(publisher => (
              <option value={publisher._id} key={publisher._id}>
                {publisher.name}
              </option>
            ))}
          </select>
        </div>

        <button className="ui button" type="submit">
          Create
        </button>
      </form>
    );
  }
}

GameForm.propTypes = {
  publishers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

GameForm.defaultProps = {
  publishers: []
};

export default GameForm;
