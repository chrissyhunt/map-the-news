import { combineReducers } from 'redux';
import newsItemsReducer from './NewsItemsReducer';
import newsSourceReducer from './NewsSourceReducer';

const rootReducer = combineReducers({
  newsItems: newsItemsReducer,
  newsSourceList: newsSourceReducer
})

export default rootReducer;
