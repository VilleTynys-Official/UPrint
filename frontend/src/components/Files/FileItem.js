import React, { useContext } from 'react';
import './FileItem.css';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FileContext from '../../context/file/FileContext';

const FileItem = ({ file }) => {
  const { _id, uri, filename, readyToPrint } = file;
  const fileContext = useContext(FileContext);
  const { deleteFile } = fileContext;

  const handleChange = event => {
    console.log(
      'readyToPrint was clicked in filename:',
      filename,
      '. State of checked is:',
      event.target.checked
    );
  };

  const onDelete = () => {
    console.log('onDelete clicked');
    deleteFile(_id);
  };

  return (
    <div className='card'>
      <div className='filebuttons'>
        <button>Edit</button>
        <button onClick={onDelete}>X</button>
      </div>
      <img
        src={uri}
        alt={`Image of ${filename}`}
        style={{ height: '50%', width: '90%' }}
      ></img>
      <div className='container'>
        <h4 style={{ margin: 0 }}>
          <b>{filename}</b>
        </h4>
        <FormControlLabel
          control={<Checkbox defaultChecked value='true' color='primary' />}
          onChange={handleChange}
          label='Ready to Print'
        />
        <br></br>
      </div>
    </div>
  );
};

FileItem.propTypes = {
  file: PropTypes.object.isRequired
};

export default FileItem;
