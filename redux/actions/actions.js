import actionTypes from './actionTypes';
import { api } from '../../app/apiKey';

const url = 'https://api.themoviedb.org/3/movie/';
const searchUrl = 'https://api.themoviedb.org/3/search/movie?';

export const fetchPromoted = () => dispatch => {
  fetch(`${url}popular?api_key=${api}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: actionTypes.FETCH_PROMOTED,
        payload: [...data.results.slice(0, 3)]
      })
    )
    .catch(err => {
      dispatch({
        type: actionTypes.FETCH_ERROR,
        payload: err
      })
    });
}

export const fetchUpcoming = () => dispatch => {
  fetch(`${url}upcoming?api_key=${api}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: actionTypes.FETCH_UPCOMING,
        payload: [...data.results]
      })
    )
    .catch(err => {
      dispatch({
        type: actionTypes.FETCH_ERROR,
        payload: err
      })
    });
}

export const fetchPopular = () => dispatch => {
  fetch(`${url}popular?api_key=${api}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: actionTypes.FETCH_POPULAR,
        payload: [...data.results]
      })
    )
    .catch(err => {
      dispatch({
        type: actionTypes.FETCH_ERROR,
        payload: err
      })
    });
}

export const fetchTopRated = () => dispatch => {
  fetch(`${url}top_rated?api_key=${api}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: actionTypes.FETCH_TOPRATED,
        payload: [...data.results]
      })
    )
    .catch(err => {
      dispatch({
        type: actionTypes.FETCH_ERROR,
        payload: err
      })
    });
}

export const fetchMovie = (movieId) => dispatch => {
  fetch(url + movieId + '?api_key=' + api)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: actionTypes.FETCH_MOVIE,
        payload: data
      })
    )
    .catch(err => {
      dispatch({
        type: actionTypes.FETCH_ERROR,
        payload: err
      })
    });
}

export const clearPage = () => dispatch => {
  dispatch({
    type: actionTypes.CLEAR_PAGE,
    payload: []
  });
}

export const fetchCast = (movieId) => dispatch => {
  fetch(url + movieId + '/credits?api_key=' + api)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: actionTypes.FETCH_CAST,
        payload: [...data.cast.slice(0, 5)]
      })
    )
    .catch(err => {
      dispatch({
        type: actionTypes.FETCH_ERROR,
        payload: err
      })
    });
}

export const handleSearch = (searchValue) => dispatch => {
  fetch(`${searchUrl}api_key=${api}&language=en-US&page=1&include_adult=false&query=${searchValue}`)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: actionTypes.FETCH_SEARCH,
        payload: [...data.results]
      })
    )
    .catch(err => {
      dispatch({
        type: actionTypes.FETCH_ERROR,
        payload: err
      })
    });
}
