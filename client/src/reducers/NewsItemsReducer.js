import { combineReducers } from 'redux';

function newsItemsReducer(state = [], action) {
  switch (action.type) {
    case "IMPORT_NEWS_ITEMS":
      return action.payload;

    default:
      return state;
  }
}

export default newsItemsReducer;
