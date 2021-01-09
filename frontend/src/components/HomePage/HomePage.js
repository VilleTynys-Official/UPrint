import React from 'react';
import StagedState from '../../context/staged/StagedState';
import Files from '../Files/Files';

/**StagedState holds the state for the printing settings before they are saved. */

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
