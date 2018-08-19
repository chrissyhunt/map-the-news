import { combineReducers } from 'redux';

function userInfoReducer(state = {}, action) {
  switch (action.type) {
    case "SET_USER":
      const user = {
        firstName: action.payload.first_name,
        lastName: action.payload.last_name,
        email: action.payload.email,
        authToken: action.payload.token
      }
      return user;

    default:
      return state;
  }
}

export default userInfoReducer;
