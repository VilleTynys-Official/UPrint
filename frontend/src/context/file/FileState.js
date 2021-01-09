/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import FileContext from './FileContext';
import fileReducer from './fileReducer';
import {
  ADD_FILE,
  DELETE_FILE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_FILE,
  FILTER_FILES,
  CLEAR_FILTER
} from '../types';

const FileState = props => {
  //Just for testing out (later this state "lives" in db)
  const initialState = {
    files: [
      {
        date: '1608457836308',
        readyToPrint: true,
        _id: '5fdf1e6ef5bf797965df7016',
        user: '5fddb33969f57756ef4979b6',
        filename: 'Lyrics VERSION 5',
        uri: 'www',
        settings: 'a4',
        __v: 0
      },
      {
        date: '1608457378571',
        readyToPrint: true,
        _id: '5fdf1ccf2aca0a78d985f71c',
        user: '5fddb33969f57756ef4979b6',
        filename: 'xxx lyrics',
        uri: 'www',
        settings: 'a4',
        __v: 0
      },
      {
        date: '1608454675923',
        readyToPrint: true,
        _id: '5fdf12c64f4fe3757fad12ad',
        user: '5fddb33969f57756ef4979b6',
        filename: 'Deep lyrics',
        uri: 'https://i.stack.imgur.com/E7q0K.png',
        settings: 'a4',
        __v: 0
      },
      {
        date: '1608454675923',
        readyToPrint: true,
        _id: '5fdf12c84f4fe3757fad12ae',
        user: '5fddb33969f57756ef4979b6',
        filename: 'Deep lyrics',
        uri: 'https://i.stack.imgur.com/E7q0K.png',
        settings: 'a4',
        __v: 0
      }
    ],
    current: {
      // date: '',
      // readyToPrint: false,
      // _id: '', // Default values
      // user: '',
      // filename: '',
      // uri: '',
      // settings: ''
    }
  };

  const [state, dispatch] = useReducer(fileReducer, initialState);

  //EVENT HANDLERS

  // Add file
  // Later this will do the handling with backend.
  const addFile = file => {
    file._id = uuid(); //creating a random id for testing (mongo can generate this later..)
    dispatch({ type: ADD_FILE, payload: file });
  };

  // Delete file
  const deleteFile = _id => {
    dispatch({ type: DELETE_FILE, payload: _id });
  };

  // Set current file
  const setCurrentFile = file => {
    dispatch({ type: SET_CURRENT, payload: file });
  };

  // Clear Current file
  const clearCurrentFile = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update file

  // Filter files

  // Clear filter

  return (
    <FileContext.Provider
      value={{
        current: state.current,
        files: state.files,
        addFile,
        deleteFile,
        setCurrentFile,
        clearCurrentFile
      }}
    >
      {props.children}
    </FileContext.Provider>
  );
};

export default FileState;
