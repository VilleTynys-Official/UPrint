import React, { useContext, useState, useEffect } from 'react';
import FileContext from '../../context/file/FileContext';
import FileItem from '../Files/FileItem';
import './Files.css';
import FileModal from './FileModal';
import FileDropZone from './FileDropzone';

/**PARENT COMPONENT FOR FILES
 * modal, dropzone and files
 *
 */

const Files = () => {
  const fileContext = useContext(FileContext);
  const { files, getFiles, loading } = fileContext;
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getFiles();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading files..</p>
      ) : (
        <>
          <FileModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          ></FileModal>
          <FileDropZone setModalOpen={setModalOpen}></FileDropZone>
          {files ? (
            <div className='Files-container'>
              {files.map(file => (
                <FileItem key={file._id} file={file}></FileItem>
              ))}
            </div>
          ) : (
            <h3 style={{ marginLeft: '40px' }}>
              You can add printable files by clicking add button!
            </h3>
          )}
        </>
      )}
    </div>
  );
};

export default Files;
