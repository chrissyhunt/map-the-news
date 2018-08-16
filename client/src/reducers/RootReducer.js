import { combineReducers } from 'redux';
import newsItemsReducer from './NewsItemsReducer';
// import searchReducer from './SearchReducer';

const rootReducer = combineReducers({
  newsItems: newsItemsReducer,
  // searchInfo: searchReducer
})

export default rootReducer;
