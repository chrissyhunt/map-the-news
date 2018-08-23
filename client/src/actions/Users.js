export function getToken(userInfo) {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/user_token', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({auth: userInfo})
    })
    .then(response => response.json())
    .then(result => localStorage.setItem("jwt", result.jwt))
  }
}

export function getUser() {
  return (dispatch) => {
    dispatch({ type: "LOADING_USER" });

    const token = "Bearer " + localStorage.getItem("jwt");
    return fetch('http://localhost:3000/api/user', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    })
    .then(response => response.json())
    .then(json => dispatch({ type: "SET_USER", payload: json }))
  }
}
