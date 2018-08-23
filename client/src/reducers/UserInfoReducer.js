import { combineReducers } from 'redux';

function userInfoReducer(state = {}, action) {
  switch (action.type) {
    case "LOADING_USER":
      return {...state, loading: true};

    case "LOADING_TOKEN":
      return {...state, loading: true};

    case "SET_USER":
      const user = {
        id: action.payload.id,
        firstName: action.payload.first_name,
        lastName: action.payload.last_name,
        email: action.payload.email
      }
      return {user, loading: false};

    default:
      return state;
  }
}

export default userInfoReducer;
