import { combineReducers } from 'redux';

function applicationReducer(state = {
  activeNewsSource: null,
  searchOptionsBoxOpen: null,
  topStoriesMode: true
}, action) {
  switch (action.type) {
    case "SET_ACTIVE_NEWS_SOURCE":
      return {
        ...state,
        activeNewsSource: action.payload,
        topStoriesMode: false
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

    case "SET_TOP_STORIES_MODE":
      return {
        ...state,
        topStoriesMode: true
      }

    case "SET_SEARCH_NEWS_MODE":
      return {
        ...state,
        topStoriesMode: false
      }

    default:
      return state;
  }
}

export default applicationReducer;
