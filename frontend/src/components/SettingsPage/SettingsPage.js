/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import AuthContext from '../../context/auth/AuthContext';

const SettingsPage = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  return (
    <div>
      <h3>Logged in as:</h3>
      <p>{user.email}</p>
    </div>
  );
};

export default SettingsPage;
