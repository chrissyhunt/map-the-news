import { combineReducers } from 'redux';
import newsItemsReducer from './NewsItemsReducer';
import newsSourceReducer from './NewsSourceReducer';
import userInfoReducer from './UserInfoReducer';

const rootReducer = combineReducers({
  newsItems: newsItemsReducer,
  newsSourceList: newsSourceReducer,
  userInfo: userInfoReducer
})

export default rootReducer;
