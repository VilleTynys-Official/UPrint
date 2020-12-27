import React, { useContext } from 'react';
import FileContext from '../../context/file/FileContext';
import FileItem from '../Files/FileItem';
import './Files.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const Files = () => {
  const fileContext = useContext(FileContext);
  const { files } = fileContext;

  return (
    <div>
      <div className='add-button'>
        <label htmlFor='upload-photo'>
          <input
            style={{ display: 'none' }}
            id='upload-photo'
            name='upload-photo'
            type='file'
          />

          <Fab
            variant='label'
            color='primary'
            aria-label='add'
            component='span'
          >
            <AddIcon></AddIcon>
            Add
          </Fab>
        </label>
      </div>
      <div className='Files-container'>
        {files.map((file, id) => (
          <FileItem key={id} file={file}></FileItem>
        ))}
      </div>
    </div>
  );
};

export default Files;
