import {
  ADD_FILE,
  DELETE_FILE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_FILE,
  FILTER_FILES,
  CLEAR_FILTER
} from '../types';

//Note that reducer always returns a new state object (and thus React will update all the children)
export default (state, action) => {
  switch (action.type) {
    case ADD_FILE:
      return {
        ...state,
        files: [...state.files, action.payload]
      };
    case DELETE_FILE:
      return {
        ...state,
        files: state.files.filter(file => file._id !== action.payload)
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
        )
      };
    default:
      return state;
  }
};
