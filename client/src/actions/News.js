export function fetchNews(searchTerms) {
  return (dispatch) => {
    dispatch({ type: "ACTIVATE_SEARCH", payload: searchTerms });
    dispatch({ type: "DEACTIVATE_SEARCH_OPTIONS_BOX" })
    const token = "Bearer " + localStorage.getItem("jwt");
    return fetch('http://localhost:3000/api/news_request', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        },
        body: JSON.stringify(searchTerms)
      })
      .then(response => response.json())
      .then(news => dispatch({type: "IMPORT_NEWS_ITEMS", payload: news}))
      .catch(err => console.log(err))
  }
}

export function saveSearch(searchTerms) {
  console.log("Hit saveSearch action: ", searchTerms)
  return (dispatch) => {
    const token = "Bearer " + localStorage.getItem("jwt");
    return fetch('http://localhost:3000/api/searches', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify(searchTerms)
    })
    .then(response => response.json())
    .then(data => dispatch({type: "SAVE_SEARCH", payload: data}))
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
