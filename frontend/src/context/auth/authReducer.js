import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  AUTH_ERROR
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload.data
      };
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      console.log(
        'token is set into localstorage. TOken: ',
        action.payload.token
      );

      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_FAIL: // Register_fail and auth_error will do the same thing
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
