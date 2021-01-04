/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import Modal from '@material-ui/core/Modal';
import StagedContext from '../../context/staged/StagedContext';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

const AddFileModal = ({ modalOpen, setModalOpen }) => {
  const { stagedFile, setStagedFile } = useContext(StagedContext);
  const classes = useStyles();

  const handleClose = () => {
    console.log('handle closed clicked');
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
          <form className={classes.form} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              label='Filename'
              name='Filename'
              autoFocus
              value={stagedFile.name}
              // onChange={handleChange}
            />
            <FormControl variant='outlined' className={classes.formControl}>
              <InputLabel htmlFor='outlined-age-native-simple'>
                Paper Size
              </InputLabel>
              <Select
                native
                // value={state.age}
                // onChange={handleChange}
                label='Paper Size'
                inputProps={{
                  name: 'a4',
                  id: 'outlined-age-native-simple'
                }}
              >
                <option value='a4'>A4 (regular)</option>
              </Select>
            </FormControl>
            <FormControlLabel
              control={<Checkbox defaultChecked value='true' color='primary' />}
              label='Ready to Print'
            />
            <div className={classes.buttonContainer}>
              <Button
                type='submit'
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
        onClose={handleClose}
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

//   const handleClose = () => {
//     setModalOpen(false);
//   };

//   const body = (
//     <div className='card'>
//       <p>this is a modal</p>
//       <button type='button' onClick={handleClose}>
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
//         onClose={handleClose}
//         aria-labelledby='simple-modal-title'
//         aria-describedby='simple-modal-description'
//       >
//         {body}
//       </Modal>
//     </div>
//   );
// };

// export default AddFileModal;
