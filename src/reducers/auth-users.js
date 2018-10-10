import {
  ADD_NEW_USER_SUCCESS,
  ADD_NEW_USER_FAIL,
  LOGIN_LOADING,
  LOGIN_FAIL,
  SET_AUTH_TOKEN,
  LOGOUT_SUCCESS
} from "./actions/auth-users";

export const authUserReducer = (state = [], action) => {
  if (action.type === ADD_NEW_USER_SUCCESS) {
    return Object.assign({}, state, {
      successMessage: true,
      userName: action.values.username
    });
  }

  if (action.type === ADD_NEW_USER_FAIL) {
    return Object.assign({}, state, {
      failMessage: true
    });
  }

  if (action.type === LOGIN_LOADING) {
    return Object.assign({}, state, {
      loginLoading: action.value
    });
  }

  if (action.type === LOGIN_FAIL) {
    return Object.assign({}, state, {
      loginFail: true
    });
  }

  if (action.type === SET_AUTH_TOKEN) {
    return Object.assign({}, state, {
      authToken: action.authToken,
      isLoggedin: true
    });
  }

  if (action.type === LOGOUT_SUCCESS) {
    return Object.assign({}, state, {
      isLoggedin: false
    });
  }

  return state;
};
