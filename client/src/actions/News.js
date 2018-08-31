export function fetchNews(searchTerms) {
  return (dispatch) => {
    dispatch({ type: "LOADING_NEWS_ITEMS" });
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
  return (dispatch) => {
    const token = "Bearer " + localStorage.getItem("jwt");
    return fetch('http://localhost:3000/api/searches', {
      method: "POST",
      headers: {
        "Content-Type": "applicationjson",
        "Authorization": token
      },
      body: JSON.stringify(searchTerms)
    })
    .then(response => response.json())
    .then(data => dispatch({type: "SAVE_SEARCH", payload: data}))
    .catch(err => console.log(err))
  }
}
