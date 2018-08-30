export function getToken(userInfo, history) {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/user_token', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({auth: userInfo})
    })
    .then(response => response.json())
    .then(result => {
      localStorage.setItem("jwt", result.jwt);
      history.push('/news');
    })
  }
}

export function getUser() {
  return (dispatch) => {
    dispatch({ type: "LOADING_USER", payload: null });
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

export function createUser(userInfo, history) {
  return (dispatch) => {
    console.log("createUser fired: ", userInfo)
    dispatch({ type: "LOADING_USER", payload: null });
    return fetch('http://localhost:3000/api/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({auth: userInfo})
    })
    .then(response => response.json())
    .then(result => {
      getToken(userInfo, history)()
      dispatch({ type: "SET_USER", payload: result})
    })
  }
}

export function logout() {
  console.log("LOGOUT CALLED!!!!!")
  return (dispatch) => {
    dispatch({ type: "LOGOUT_USER", payload: null });
    localStorage.removeItem("jwt");
  }
}
