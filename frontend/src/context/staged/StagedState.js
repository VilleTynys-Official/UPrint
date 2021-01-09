/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import StagedContext from './StagedContext';

/*** STAGED STATE
 * This Context holds the state for the controlled modal form.
 * Basically, stagedFile collects all the printing settings and filedata.
 * When user is satisfied and clicks save, stagedFile is used to update the FileState.
 *
 * The state is separated here because it is used by at least two components at the moment (AddFileModal & FileDropZone)
 */

const StagedState = props => {
  const [stagedFile, setStagedFile] = useState({
    date: '',
    readyToPrint: true,
    _id: '',
    user: '',
    filename: 'default filename',
    uri: '',
    settings: 'a4',
    size: 0
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
