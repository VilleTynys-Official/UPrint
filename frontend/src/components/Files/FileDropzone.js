/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import FileContext from '../../context/file/FileContext';

export default class FileDropZone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      files: []
    };
  }

  // this is how context is used in classes
  static contextType = FileContext;

  handleClose() {
    this.setState({
      open: false
    });
  }

  handleSave(files) {
    //Update fileState and open AddFileModal
    console.log(
      'Context BEFORE setting current file in dropzone: ',
      this.context
    );
    this.props.setModalOpen(true);
    this.context.setCurrentFile({
      filename: files[0].name, //here we pick the information from dropzone and add them to files state
      size: files[0].size,
      uri: files[0].path
    });
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

/**
 * THIS IS DROPZONE GIVES OUT:
lastModified: 1606314918938
lastModifiedDate: Wed Nov 25 2020 16:35:18 GMT+0200 (Eastern European Standard Time) {}
name: "VilleTynys..jpg"
path: "VilleTynys..jpg"
size: 1221239
type: "image/jpeg"
webkitRelativePath: ""
 */
