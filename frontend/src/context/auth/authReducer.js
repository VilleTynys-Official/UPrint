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

const saveToStorage = state => {
  sessionStorage.setItem('loginState', JSON.stringify(state)); // sessionStorage needs to be type of String
};

export default (state, action) => {
  let newState = {};
  switch (action.type) {
    case USER_LOADED:
      newState = {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      };
      saveToStorage(newState);
      return newState;
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      sessionStorage.setItem('token', action.payload);
      newState = {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        loading: false
      };
      saveToStorage(newState);
      return newState;
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      sessionStorage.removeItem('token');
      newState = {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload
      };
      saveToStorage(newState);
      return newState;
    case CLEAR_ERRORS:
      newState = {
        ...state,
        error: null
      };
      saveToStorage(newState);
      return newState;
    default:
      return state;
  }
};
