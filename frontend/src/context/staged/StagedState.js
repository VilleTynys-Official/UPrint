/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import StagedContext from './StagedContext';

/*** STAGED STATE
 * This Context holds the state for the controlled modal form.
 * Basically, stagedFile collects all the printing settings and filedata.
 * When user is satisfied and clicks save, stagedFile is used to update the FileState.
 */

const StagedState = props => {
  const [stagedFile, setStagedFile] = useState({
    name: 'This is a filename placeholder',
    data: '12342'
  });

  return (
    <StagedContext.Provider
      value={{ stagedFile: stagedFile, setStagedFile: setStagedFile }}
    >
      {props.children}
    </StagedContext.Provider>
  );
};

export default StagedState;
