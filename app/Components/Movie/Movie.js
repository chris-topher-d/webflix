import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovie, fetchCast, clearPage } from '../../../redux/actions/actions';
import { withRouter } from 'react-router-dom';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.location.state.id,
    }
  }

  componentDidMount() {
    this.props.fetchMovie(this.state.id);
    this.props.fetchCast(this.state.id);
  }

  componentWillUnmount() {
    this.props.clearPage();
  }

  render() {
    const poster = 'https://image.tmdb.org/t/p/w500' + this.props.movie.poster_path;
    const cast = this.props.cast.map((actor, i) => {
      if (i === 4) return actor.name;
      return actor.name + ', ';
    });

    return (
      <div className='movie-container'>
        <div className='movie-poster'>
          <img src={poster} alt='Movie Poster'/>
        </div>
        <div className='movie-info'>
          <p id='movie-title'>{this.props.movie.title}</p>
          <p id='rating'>Rating: {this.props.movie.vote_average !== 0 ? this.props.movie.vote_average : 'No rating yet'}</p>
          <p id='runtime'>Runtime: {this.props.movie.runtime} minutes</p>
          <div id='movie-cast'>Cast: {cast}</div>
          <p id='overview'>{this.props.movie.overview}</p>
        </div>
      </div>
    );
  }
}

Movie.propTypes = {
  fetchMovie: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
  fetchCast: PropTypes.func.isRequired,
  cast: PropTypes.array.isRequired,
  clearPage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movie: state.movie,
  cast: state.cast
});

export default connect(mapStateToProps, { fetchMovie, fetchCast, clearPage })(withRouter(Movie));
