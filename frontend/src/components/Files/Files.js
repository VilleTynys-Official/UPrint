import React, { useContext, useState } from 'react';
import FileContext from '../../context/file/FileContext';
import FileItem from '../Files/FileItem';
import './Files.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AddFileModal from './AddFileModal';
import FileDropZone from './FileDropzone';
import FileDropzone2 from './FileDropzone2';
import StagedContext from '../../context/staged/StagedContext';

/**PARENT COMPONENT FOR FILES
 * modal, dropzone and files
 *
 */

const Files = () => {
  const fileContext = useContext(FileContext);
  const { files } = fileContext; // for mapping the files
  const [modalOpen, setModalOpen] = useState(false);
  const stagedContext = useContext(StagedContext);
  const { stagedFile, setStagedFile } = stagedContext; //just for the FileDropZone

  return (
    <div>
      <AddFileModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      ></AddFileModal>
      <FileDropZone
        setModalOpen={setModalOpen}
        setStagedFile={setStagedFile}
      ></FileDropZone>
      {/* <FileDropzone2></FileDropzone2> */}
      <div className='Files-container'>
        {files.map((file, id) => (
          <FileItem key={id} file={file}></FileItem>
        ))}
      </div>
    </div>
  );
};

export default Files;
