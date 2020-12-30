import React from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

//Material ui element styling override
const useStyles = makeStyles({
  root: {
    '& .MuiDropzoneArea-root': {
      width: 300
    }
  }
});
const FileDropzone2 = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <DropzoneArea
        acceptedFiles={['image/*']}
        dropzoneText={'Drag and drop an image here or click'}
        onChange={files => console.log('Files:', files)}
      />
    </div>
  );
};

export default FileDropzone2;
