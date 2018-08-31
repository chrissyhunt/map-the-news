import { combineReducers } from 'redux';

function userInfoReducer(state = {
  user: null,
  loading: false
}, action) {
  switch (action.type) {
    case "LOADING_USER":
      return {...state, loading: true};

    case "SET_USER":
      const user = {
        id: action.payload.id,
        firstName: action.payload.first_name,
        lastName: action.payload.last_name,
        email: action.payload.email,
        searches: action.payload.searches
      }
      return {user, loading: false};

    case "SAVE_SEARCH":
      console.log("SAVE_SEARCH", action.payload)
      return {...state, user: {
        ...state.user,
        searches: [...state.user.searches, action.payload]
        }
      }

    case "LOGOUT_USER":
      return {
        user: null,
        loading: false
      }

    default:
      return state;
  }
}

export default userInfoReducer;
