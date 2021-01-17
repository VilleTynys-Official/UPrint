import React, { useState, useContext, useEffect } from 'react';
import { Link as RouterLink, Redirect } from 'react-router-dom'; // Used as Material ui Link component parameter to the regular routing behavior
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AuthContext from '../../context/auth/AuthContext';

const useStyles = makeStyles(() => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: { marginTop: 30 },
  form: {
    width: '100%'
  },
  submit: {}
}));

const Register = props => {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const [validated, setValidated] = useState('');
  const [user, setUser] = useState({
    email: '',
    password: '',
    password2: ''
  });

  const { registerUser, clearErrors, error, isAuthenticated } = authContext;
  const { email, password, password2 } = user;

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     return <Redirect to='/home'></Redirect>;
  //   }
  // }, [isAuthenticated]);

  const onSubmit = event => {
    event.preventDefault();

    // some simple validation
    if (email === '' || password === '' || password2 === '') {
      setValidated('Please fill all fields');
      return;
    }
    if (password !== password2) {
      setValidated('Passwords do not match');
      return;
    }
    if (password.length < 6) {
      setValidated('Passwords length must be over 6 characters');
      return;
    } else {
      setValidated(null);
      registerUser({
        email,
        password
      });
      console.log('submitted email and password');
    }
  };

  const onChange = event => {
    clearErrors();
    setValidated('');
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Register
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={event => onSubmit(event)}
        >
          <TextField
            onChange={event => onChange(event)}
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            onChange={event => onChange(event)}
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <TextField
            onChange={event => onChange(event)}
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password2'
            label='Confirm password'
            type='password'
            id='password2'
            autoComplete='current-password'
          />
          <p style={{ color: 'red' }}>{validated ? validated : ''}</p>
          <p style={{ color: 'red' }}>{error}</p>
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Register
          </Button>
          <Grid container>
            <Grid item xs>
              <Link component={RouterLink} to='/' variant='body2'>
                Forgot password?
                {/**TODO: add here a real forgot password servive that sends email authentication or something */}
              </Link>
            </Grid>
            <Grid item>
              <Link component={RouterLink} to='/' variant='body2'>
                {'Already have an account? Sign in here'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
};

export default Register;
