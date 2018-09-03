import { combineReducers } from 'redux';

function applicationReducer(state = {
  activeNewsSource: null
}, action) {
  switch (action.type) {
    case "SET_ACTIVE_NEWS_SOURCE":
      return {
        activeNewsSource: action.payload
      };

    default:
      return state;
  }
}

export default applicationReducer;
