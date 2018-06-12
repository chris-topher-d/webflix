import actionTypes from '../actions/actionTypes';

const movieReducers = {
  movieReducer: (movie = {}, action) => {
    switch (action.type) {
      case actionTypes.FETCH_MOVIE:
        return movie = action.payload;

      case actionTypes.CLEAR_PAGE:
        return movie = action.payload;

      case actionTypes.FETCH_ERROR:
        return console.log(action.payload);

      default:
        return movie;
    }
  },

  castReducer: (cast = [], action) => {
    switch (action.type) {
      case actionTypes.FETCH_CAST:
        return cast = action.payload;

      case actionTypes.FETCH_ERROR:
        return console.log(action.payload);

      default:
        return cast;
    }
  }
};

export default movieReducers;
