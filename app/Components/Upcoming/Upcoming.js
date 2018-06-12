import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUpcoming } from '../../../redux/actions/actions';
import { Link } from 'react-router-dom';

class Upcoming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 0
    }
  }

  componentDidMount() {
    this.props.fetchUpcoming();
  }

  slideRight(width) {
    if (this.state.slide + width < 4240) {
      this.setState({slide: this.state.slide += 202});
    }
  }

  slideLeft(width) {
    if (this.state.slide > 0) {
      this.setState({slide: this.state.slide -= 202});
    }
  }

  render() {
    let style = { transform: 'translate(-' + this.state.slide + 'px, 0)' };

    const posters = this.props.upcoming.map(movie => {
      let poster = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
      return (
        <div className='poster' key={movie.id} style={style}>
          <img src={poster} alt='movie poster'/>
          <Link to={{ pathname: '/movie', state: { id: `${movie.id}` }}}><i className="fas fa-play"></i></Link>
        </div>
      );
    });

    return (
      <div className='upcoming'>
        <p>Upcoming</p>
        <div ref={this.myInput} className='posters'>
          {posters}
          <div className='arrows'>
            <i class="fas fa-angle-left" onClick={() => { this.slideLeft(this.props.width) }}></i>
            <i class="fas fa-angle-right" onClick={() => { this.slideRight(this.props.width) }}></i>
          </div>
        </div>
      </div>
    );
  }
}

Upcoming.propTypes = {
  fetchUpcoming: PropTypes.func.isRequired,
  upcoming: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  upcoming: state.upcoming
});

export default connect(mapStateToProps, { fetchUpcoming })(Upcoming);
