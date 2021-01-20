/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import axios from 'axios';
import FileContext from './FileContext';
import fileReducer from './fileReducer';
import {
  ADD_FILE,
  DELETE_FILE,
  GET_FILES,
  CLEAR_FILES,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_FILE,
  FILTER_FILES,
  CLEAR_FILTER,
  FILE_ERROR
} from '../types';

/**   FILE TYPE EXAMPLE:
date: '1608457836308',
readyToPrint: true,
_id: '5fdf1e6ef5bf797965df7016',
user: '5fddb33969f57756ef4979b6',
filename: 'Lyrics VERSION 5',
uri: 'www',
settings: 'a4',
__v: 0
*/

const FileState = props => {
  const initialState = {
    files: null,
    current: '',
    error: null,
    loading: null
  };

  const [state, dispatch] = useReducer(fileReducer, initialState);

  /** EVENT HANDLERS
   * Description:
   *  Token (if it exists) for axios requests is provided already globally with setAuthToken-utility.
   *
   */

  // get files
  const getFiles = async () => {
    try {
      const res = await axios.get('/api/files');
      dispatch({ type: GET_FILES, payload: res.data });
    } catch (err) {
      dispatch({ type: FILE_ERROR, payload: err.response.data.msg });
    }
  };

  // Add file
  const addFile = async file => {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' }
      };
      const res = await axios.post('/api/files', file, config);
      dispatch({ type: ADD_FILE, payload: res.data.saved });
    } catch (err) {
      dispatch({ type: FILE_ERROR, payload: err.response.data.msg });
    }
  };

  // Delete file
  const deleteFile = _id => {
    dispatch({ type: DELETE_FILE, payload: _id });
  };

  // Clear files
  const clearFiles = () => {
    dispatch({ type: CLEAR_FILES });
  };

  // Set current file
  const setCurrentFile = file => {
    dispatch({ type: SET_CURRENT, payload: file });
  };

  // Clear Current file
  // Not sure if needed.. so remove later if not used.
  const clearCurrentFile = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update file
  const updateFile = file => {
    dispatch({ type: UPDATE_FILE, payload: file });
  };

  // Filter files

  // Clear filter

  return (
    <FileContext.Provider
      value={{
        current: state.current,
        files: state.files,
        error: state.error,
        loading: state.loading,
        getFiles,
        addFile,
        deleteFile,
        clearFiles,
        setCurrentFile,
        clearCurrentFile,
        updateFile
      }}
    >
      {props.children}
    </FileContext.Provider>
  );
};

export default FileState;
