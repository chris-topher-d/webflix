import actionTypes from '../actions/actionTypes';

const homepageReducers = {
  promotedReducer: (promoted = [], action) => {
    switch (action.type) {
      case actionTypes.FETCH_PROMOTED:
        return promoted = action.payload;

      case actionTypes.CLEAR_PAGE:
        return promoted = action.payload;

      case actionTypes.FETCH_ERROR:
        return console.log(action.payload);

      default:
        return promoted;
    }
  },

  upcomingReducer: (upcoming = [], action) => {
    switch (action.type) {
      case actionTypes.FETCH_UPCOMING:
        return upcoming = action.payload;

      case actionTypes.FETCH_ERROR:
        return console.log(action.payload);

      default:
        return upcoming;
    }
  },

  popularReducer: (popular = [], action) => {
    switch (action.type) {
      case actionTypes.FETCH_POPULAR:
        return popular = action.payload;

      case actionTypes.FETCH_ERROR:
        return console.log(action.payload);

      default:
        return popular;
    }
  },

  topRatedReducer: (topRated = [], action) => {
    switch (action.type) {
      case actionTypes.FETCH_TOPRATED:
        return topRated = action.payload;

      case actionTypes.FETCH_ERROR:
        return console.log(action.payload);

      default:
        return topRated;
    }
  }
};

export default homepageReducers;
