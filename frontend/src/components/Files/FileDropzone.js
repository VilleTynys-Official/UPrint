/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import StagedContext from '../../context/staged/StagedContext';

export default class FileDropZone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      files: []
    };
  }

  static contextType = StagedContext;

  handleClose() {
    this.setState({
      open: false
    });
  }

  handleSave(files) {
    //Saving files to StagedState for further use and closing Modal.
    this.props.setModalOpen(true);
    // console.log('files are', files);

    this.context.setStagedFile(files[0]); //pick only the first file

    this.setState({
      files: files,
      open: false
    });
  }

  handleOpen() {
    this.setState({
      open: true
    });
  }

  render() {
    return (
      <div>
        <div className='add-button'>
          <Fab
            variant='extended'
            color='primary'
            aria-label='add'
            component='span'
            onClick={this.handleOpen.bind(this)}
          >
            <AddIcon></AddIcon>
            Add
          </Fab>
        </div>
        <DropzoneDialog
          filesLimit={1}
          open={this.state.open}
          onSave={this.handleSave.bind(this)}
          acceptedFiles={['image/jpeg', 'image/png', 'image/bmp', '.pdf*']}
          showPreviews={true}
          maxFileSize={5000000}
          onClose={this.handleClose.bind(this)}
        />
      </div>
    );
  }
}
