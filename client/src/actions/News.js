import { handleErrors } from './Application';

export function fetchNews(searchTerms) {
  return (dispatch) => {
    dispatch({ type: "ACTIVATE_SEARCH", payload: searchTerms });
    dispatch({ type: "DEACTIVATE_SEARCH_OPTIONS_BOX" });
    dispatch({ type: "LOADING", payload: "Loading Search Results" });
    const token = "Bearer " + localStorage.getItem("jwt");
    return fetch('http://localhost:3000/api/news_request', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        },
        body: JSON.stringify(searchTerms)
      })
      .then(handleErrors)
      .then(response => response.json())
      .then(news => {
        dispatch({type: "IMPORT_NEWS_ITEMS", payload: news});
        dispatch({type: "CLEAR_LOADING_MESSAGE"});
      })
      .catch(err => console.log(err))
  }
}

export function getTopHeadlines() {
  return (dispatch) => {
    dispatch({ type: "CLEAR_SEARCH"});
    dispatch({ type: "DEACTIVATE_SEARCH_OPTIONS_BOX" });
    dispatch({ type: "LOADING", payload: "Loading Top Headlines" });
    const token = "Bearer " + localStorage.getItem("jwt");
    return fetch('http://localhost:3000/api/top_headlines', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    })
    .then(handleErrors)
    .then(response => response.json())
    .then(news => {
      dispatch({type: "IMPORT_NEWS_ITEMS", payload: news});
      dispatch({type: "CLEAR_LOADING_MESSAGE"});
    })
    .catch(err => console.log(err))
  }
}

export function setActiveNewsSource(source) {
  return { type: "SET_ACTIVE_NEWS_SOURCE", payload: source }
}

export function clearActiveNewsSource() {
  return { type: "CLEAR_ACTIVE_NEWS_SOURCE" }
}

export function activateSearchOptionsBox() {
  return { type: "ACTIVATE_SEARCH_OPTIONS_BOX" }
}

export function deactivateSearchOptionsBox() {
  return { type: "DEACTIVATE_SEARCH_OPTIONS_BOX" }
}

export function setTopStoriesMode() {
  return { type: "SET_TOP_STORIES_MODE" }
}

export function setSearchNewsMode() {
  return { type: "SET_SEARCH_NEWS_MODE" }
}

export function activateUserSettingsBox() {
  return { type: "ACTIVATE_USER_SETTINGS_BOX" }
}

export function deactivateUserSettingsBox() {
  return { type: "DEACTIVATE_USER_SETTINGS_BOX" }
}
