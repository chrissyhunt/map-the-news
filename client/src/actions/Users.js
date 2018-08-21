export const getToken = (userInfo) => {
  dispatch({ type: "LOADING_USER" });
  fetch('http://localhost:3000/api/user_token', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({auth: userInfo})
  })
  .then(response => response.json())
  .then(result => localStorage.setItem("jwt", result.jwt))
}

export const getUser = (userInfo) => {
  let token = "Bearer " + localStorage.getItem("jwt");
  fetch('http://localhost:3000/api/user', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    }
  })
  .then(response => response.json())
  .then(json => this.props.setUser(json))
}

export const setUser = (response) => {
  dispatch({ type: "SET_USER", payload: response })
}
