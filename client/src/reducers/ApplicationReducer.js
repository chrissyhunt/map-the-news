import { combineReducers } from 'redux';

function applicationReducer(state = {
  activeNewsSource: null,
  searchOptionsBoxOpen: null
}, action) {
  switch (action.type) {
    case "SET_ACTIVE_NEWS_SOURCE":
      return {
        ...state,
        activeNewsSource: action.payload
      };

    case "CLEAR_ACTIVE_NEWS_SOURCE":
      return {
        ...state,
        activeNewsSource: null
      };

    case "ACTIVATE_SEARCH_OPTIONS_BOX":
      return {
        ...state,
        searchOptionsBoxOpen: true
      };

    case "DEACTIVATE_SEARCH_OPTIONS_BOX":
      return {
        ...state,
        searchOptionsBoxOpen: false
      };

    default:
      return state;
  }
}

export default applicationReducer;
