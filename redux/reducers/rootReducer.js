import { combineReducers } from 'redux';
import homepageReducers from './homepageReducers';
import movieReducers from './movieReducers';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  promoted: homepageReducers.promotedReducer,
  upcoming: homepageReducers.upcomingReducer,
  popular: homepageReducers.popularReducer,
  topRated: homepageReducers.topRatedReducer,
  movie: movieReducers.movieReducer,
  cast: movieReducers.castReducer,
  searchResults: searchReducer
});

export default rootReducer;
