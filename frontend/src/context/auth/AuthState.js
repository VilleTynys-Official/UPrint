/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import authReducer from './authReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../types';

/**AUTHSTATE
 * This is for user state and session management *
 */
const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //EVENT HANDLERS

  // Load User

  // Register User

  // Login User

  // Logout User

  // Clear errors

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.loading
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
