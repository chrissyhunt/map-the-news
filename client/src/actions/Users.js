export function getToken(userInfo) {
  return (dispatch) => {
    dispatch({ type: "LOADING_TOKEN" });

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
    console.log(token);
    return fetch('http://localhost:3000/api/user', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    })
    .then(response => {
      console.log(response);
      response.json()
    })
    .then(json => dispatch({ type: "SET_USER", payload: json }))
  }
}
