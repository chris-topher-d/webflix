import actionTypes from '../actions/actionTypes';

const searchReducer = (searchResults = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_SEARCH:
      return searchResults = action.payload;

    case actionTypes.FETCH_ERROR:
      return console.log(action.payload);

    default:
      return searchResults;
  }
}

export default searchReducer;
