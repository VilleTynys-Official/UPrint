import React, { useContext, useState } from 'react';
import FileContext from '../../context/file/FileContext';
import FileItem from '../Files/FileItem';
import './Files.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import FileModal from './FileModal';
import FileDropZone from './FileDropzone';

/**PARENT COMPONENT FOR FILES
 * modal, dropzone and files
 *
 */

const Files = () => {
  const fileContext = useContext(FileContext);
  const { files } = fileContext; // for mapping the files
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <FileModal modalOpen={modalOpen} setModalOpen={setModalOpen}></FileModal>
      <FileDropZone setModalOpen={setModalOpen}></FileDropZone>
      <div className='Files-container'>
        {files.map(file => (
          <FileItem key={file._id} file={file}></FileItem>
        ))}
      </div>
    </div>
  );
};

export default Files;
