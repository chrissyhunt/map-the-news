function applicationReducer(state = {
  activeNewsSource: null,
  searchOptionsBoxOpen: null,
  userSettingsBoxOpen: null,
  topStoriesMode: true,
  loading: null
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

    case "ACTIVATE_USER_SETTINGS_BOX":
      return {
        ...state,
        userSettingsBoxOpen: true
      }

    case "DEACTIVATE_USER_SETTINGS_BOX":
      return {
        ...state,
        userSettingsBoxOpen: false
      }

    case "LOADING":
      return {
        ...state,
        loading: action.payload
      }

    case "CLEAR_LOADING_MESSAGE":
      return {
        ...state,
        loading: null
      }

    default:
      return state;
  }
}

export default applicationReducer;
