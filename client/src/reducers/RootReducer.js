import { combineReducers } from 'redux';
import newsItemsReducer from './NewsItemsReducer';
import newsSourceReducer from './NewsSourceReducer';
import userInfoReducer from './UserInfoReducer';
import searchReducer from './SearchReducer';

const rootReducer = combineReducers({
  newsItems: newsItemsReducer,
  newsSourceList: newsSourceReducer,
  userInfo: userInfoReducer,
  searchInfo: searchReducer
})

export default rootReducer;
