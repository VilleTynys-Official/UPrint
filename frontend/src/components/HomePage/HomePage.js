import React from 'react';
import StagedState from '../../context/staged/StagedState';
import Files from '../Files/Files';

const HomePage = () => {
  return (
    <div className='HomePage-container'>
      <StagedState>
        <Files></Files>
      </StagedState>
    </div>
  );
};

export default HomePage;
