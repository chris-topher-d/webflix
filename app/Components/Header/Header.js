import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleSearch } from '../../../redux/actions/actions';
import { Link, Redirect } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      toSearch: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleClick() {
    this.props.handleSearch(this.state.value);
    this.setState({value: ''});
  }

  render() {
    return (
      <div className='header'>
        <Link to='/webflix'><h1>WEBFLIX</h1></Link>
        <div className='search-bar'>
          <input
            id='input'
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
            placeholder='Search for movies/shows'
          />
          <Link to={{ pathname: '/search'}}>
            <i className="fas fa-search" onClick={this.handleClick}></i>
          </Link>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  searchResults: state.searchResults
});

export default connect(null, { handleSearch })(Header);
