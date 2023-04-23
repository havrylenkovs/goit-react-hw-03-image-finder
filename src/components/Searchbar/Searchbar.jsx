import React from 'react';
import { Component } from 'react';
import './Searchbar.css';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });

    // this.setState({ value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      return alert('Please enter, what do you want to see');
    }
    console.log(this.state.searchQuery);
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className="SearchContainer">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button className="SearchForm-button" type="submit">
            <span></span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchQuery"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
// export default Searchbar;
