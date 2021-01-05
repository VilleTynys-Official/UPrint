import React from 'react';
import './FileItem.css';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const FileItem = ({ file }) => {
  const { uri, filename, readyToPrint } = file;

  const handleChange = event => {
    console.log(
      'readyToPrint was clicked in filename:',
      filename,
      '. State of checked is:',
      event.target.checked
    );
  };

  return (
    <div className='card'>
      <div className='filebuttons'>
        <button>Edit</button>
        <button>X</button>
      </div>
      <img
        src={uri}
        alt={`Image of ${filename}`}
        style={{ height: '60%', width: '90%' }}
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
