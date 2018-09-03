import { combineReducers } from 'redux';

function applicationReducer(state = {
  activeNewsSource: null
}, action) {
  switch (action.type) {
    case "SET_ACTIVE_NEWS_SOURCE":
      return {
        activeNewsSource: action.payload
      };

    case "CLEAR_ACTIVE_NEWS_SOURCE":
      return {
        activeNewsSource: null
      }

    default:
      return state;
  }
}

export default applicationReducer;
