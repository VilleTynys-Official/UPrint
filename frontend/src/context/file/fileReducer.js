import {
  ADD_FILE,
  GET_FILES,
  DELETE_FILE,
  CLEAR_FILES,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_FILE,
  FILTER_FILES,
  CLEAR_FILTER,
  FILE_ERROR
} from '../types';

//Note that reducer always returns a new state object (and thus React will update all the children)
export default (state, action) => {
  switch (action.type) {
    case GET_FILES:
      return {
        ...state,
        files: action.payload,
        loading: false
      };
    case ADD_FILE:
      return {
        ...state,
        files: [...state.files, action.payload],
        loading: false
      };
    case DELETE_FILE:
      return {
        ...state,
        files: state.files.filter(file => file._id !== action.payload),
        loading: false
      };
    case CLEAR_FILES:
      console.log('clearing files in reducer');
      return {
        ...state,
        files: null,
        error: null,
        current: ''
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: ''
      };
    case UPDATE_FILE:
      console.log('updating file.. Action payload is', action.payload);
      return {
        ...state,
        files: state.files.map(file =>
          file._id === action.payload._id ? action.payload : file
        ),
        loading: false
      };
    case FILE_ERROR:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
};
