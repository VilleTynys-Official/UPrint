/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FileContext from '../../context/file/FileContext';

// MATERIAL UI STYLING
const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    height: '100%',
    marginLeft: '100px',
    marginRight: '100px',
    marginBottom: '400px',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderRadius: '5px'
  },
  imagePaper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    flexGrow: 5,
    // backgroundColor: 'blue',
    margin: '20px'
  },
  settingsPaper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    flexGrow: 1,
    // backgroundColor: 'blue',
    margin: '20px'
  },
  form: {
    width: '40%' // Fix IE 11 issue.
  },

  formControl: {
    margin: '20px',
    minWidth: 120
  },
  selectEmpty: {
    marginTop: '20px'
  },
  submit: {},
  buttonContainer: {
    display: 'flex'
  }
}));

// ADDFILEMODAL
const AddFileModal = ({ modalOpen, setModalOpen }) => {
  const classes = useStyles();
  const fileContext = useContext(FileContext);
  const {
    date,
    readyToPrint,
    user,
    filename,
    uri,
    settings
  } = fileContext.current;

  const onClose = () => {
    console.log('handle closed clicked');
    setModalOpen(false);
  };

  const onChange = event => {
    console.log('event.target name is:', event.target.name);
    fileContext.setCurrentFile({
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log('User submitted file settings');
    fileContext.addFile(fileContext.current);
    fileContext.setCurrentFile(
      //   {
      //   date: '',
      //   readyToPrint: false,
      //   _id: '', // cleanup
      //   user: '',
      //   filename: '',
      //   uri: '',
      //   settings: ''
      // }
      ''
    );
    setModalOpen(false);
  };

  const body = (
    <>
      <div className={classes.container}>
        <div className={classes.imagePaper}>
          File image will be displayed here
        </div>
        <div className={classes.settingsPaper}>
          <Typography component='h1' variant='h5'>
            Choose Printing Settings
          </Typography>
          <form onSubmit={() => onSubmit()} className={classes.form} noValidate>
            <FormControl>
              <TextField
                InputLabelProps={{ shrink: true }} // "official" workaround to fix overlapping labels (material.ui)
                variant='outlined'
                margin='normal'
                required
                fullWidth
                label='Filename'
                name='filename'
                autoFocus
                value={filename}
                onChange={onChange}
              />
            </FormControl>
            <FormControl variant='outlined' className={classes.formControl}>
              <InputLabel htmlFor='outlined-age-native-simple'>
                Paper Size
              </InputLabel>
              <Select
                native
                // value={state.age}
                onChange={onChange}
                label='Paper Size'
                inputProps={{
                  name: 'settings',
                  id: 'outlined-age-native-simple'
                }}
              >
                <option value='a4'>A4 (regular)</option>
                <option value='a3'>A3 (bigger)</option>
              </Select>
            </FormControl>
            <FormControlLabel
              control={<Checkbox defaultChecked value='true' color='primary' />}
              label='Ready to Print'
            ></FormControlLabel>
            <div className={classes.buttonContainer}>
              <Button
                fullWidth
                variant='outlined'
                color='primary'
                className={classes.submit}
              >
                Cancel
              </Button>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
                onClick={onSubmit}
              >
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );

  return (
    <div>
      <Modal
        // open='true'
        open={modalOpen}
        onClose={onClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </div>
  );
};

export default AddFileModal;

// /* eslint-disable react/prop-types */
// import React, { useContext } from 'react';
// import Modal from '@material-ui/core/Modal';
// import StagedContext from '../../context/staged/StagedContext';

// const AddFileModal = ({ modalOpen, setModalOpen }) => {
//   const { stagedFile, setStagedFile } = useContext(StagedContext);

//   console.log('stagedFile in modal is : ', stagedFile);

//   const onClose = () => {
//     setModalOpen(false);
//   };

//   const body = (
//     <div className='card'>
//       <p>this is a modal</p>
//       <button type='button' onClick={onClose}>
//         Close Modal
//       </button>
//       {/**ADD FORM HERE**/}
//     </div>
//   );

//   return (
//     <div>
//       <Modal
//         open='true'
//         // open={modalOpen}
//         onClose={onClose}
//         aria-labelledby='simple-modal-title'
//         aria-describedby='simple-modal-description'
//       >
//         {body}
//       </Modal>
//     </div>
//   );
// };

// export default AddFileModal;
