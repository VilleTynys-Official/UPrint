/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import authReducer from './authReducer';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
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

/**AUTHSTATE
 * This is for user state and session management
 *
 * Axios url is using a proxy (that is setup in package.json).
 *
 */
const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null, // @TODO Make this so that AuthState is checked and updated into localstorage
    loading: true,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //EVENT HANDLERS

  // Load User
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token); // this is utility function for axios requests (sets token into headers)
    }

    try {
      const res = await axios.get('/api/auth');
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // Register User
  const registerUser = async formData => {
    const config = {
      headers: {
        'Content-type': 'application/json' // tells server that MIME type of the request is json
      }
    };
    try {
      const res = await axios.post('/api/register', formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data.token
      });
      loadUser();
    } catch (err) {
      console.log('register failed');
      console.log('error iiiiis', err.response.data.msg);

      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  // Login User
  const loginUser = async formData => {
    console.log('formdata', formData);

    const config = {
      headers: {
        'Content-type': 'application/json' // tells server that MIME type of the request is json
      }
    };
    try {
      const res = await axios.post('/api/auth', formData, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.token
      });
      loadUser();
    } catch (err) {
      console.log('error is ', err);

      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  // Logout User
  const logoutUser = () => {
    try {
      dispatch({
        type: LOGOUT
      });
      console.log('user was logged out');
    } catch (err) {
      console.log('error is ', err);
    }
  };

  // Clear errors
  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        loadUser,
        registerUser,
        loginUser,
        logoutUser,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
