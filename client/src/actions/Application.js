export function handleErrors(response) {
  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem("jwt");
      window.location.reload(true);
    }
    throw Error(`Request rejected with status ${response.status}`);
  } else {
    return response
  }
}
