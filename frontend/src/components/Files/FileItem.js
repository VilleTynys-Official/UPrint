/* eslint-disable react/prop-types */
import React from 'react';
import './FileItem.css';

const FileItem = ({ file }) => {
  return (
    <div className='card'>
      <div className='filebuttons'>
        <button>Edit</button>
        <button>X</button>
      </div>
      <img
        src={file.uri}
        alt={`Image of ${file.filename}`}
        style={{ height: '60%', width: '90%' }}
      ></img>
      <div className='container'>
        <h4 style={{ margin: 0 }}>
          <b>{file.filename}</b>
        </h4>
        Ready to print: {file.readyToPrint.toString()}
        <br></br>
      </div>
    </div>
  );
};

export default FileItem;
