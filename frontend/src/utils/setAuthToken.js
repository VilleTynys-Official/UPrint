/** Utility function that:
 * 1. checks if token exists
 * 2. if it token exists adds it into axios request headers*/

import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
