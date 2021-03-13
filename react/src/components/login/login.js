
// import React from 'react'
// import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css'
// import { Link } from 'react-router-dom';
// import sign from '../register/register'

// const Login = () => (
  
//   <Grid className="formRe center" textAlign='right'  style={{ height: '100vh' }} verticalAlign='middle'>
//     <Grid.Column style={{ maxWidth: 450 }}>
//       <Header as='h2' color='teal' textAlign='center'>
//         <Image src='/logo.png' /> התחבר
//       </Header>
//       <Form size='large' >
//         <Segment stacked>
//           <Form.Input fluid icon='user' iconPosition='left' placeholder='כתובת מייל' />
//           <Form.Input
//             fluid
//             icon='lock'
//             iconPosition='left'
//             placeholder='סיסמה'
//             type='password'
//           />

//           <Button color='teal' fluid size='large'>
//             Login
//           </Button>
//         </Segment>
//         <div></div>
//       <Link to='/sign'>  <button  id=" signup">signup</button> </Link>
//       </Form>
//       <Message>
//         New to us? <a href='#'>Sign Up</a>
//       </Message>
//     </Grid.Column>
//   </Grid>
// )
// export default Login;




import React, { useState } from 'react';
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
import 'semantic-ui-css/semantic.min.css';
import axios from '../../axios'; 


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = ()=> {
  const classes = useStyles();
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const signIn = () => {
    debugger;
    axios.get(`user/login/${email}/${password}`).then(res=>{
      if(res.data === false) {
        alert('error in password');
      } else {
        alert('success' + res.data.firstName + ' ' + res.data.lastName);
      }
      }).catch(e=>console.log(e));
  }
  const saveEmail = event => {
    setEmail(event.target.value);
  }
  const savePassword = event => {
    setPassword(event.target.value);
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          התחבר
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="כתובת מייל"
            name="email"
            autoComplete="email"
            autoFocus
            onBlur={saveEmail}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="סיסמה"
            type="password"
            id="password"
            autoComplete="current-password"
            onBlur={savePassword}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="זכור אותי"
          />
          <Button
            // type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={signIn}
            value="התחבר"
        >
            התחבר
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                שכחת סיסמא?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
export default Login