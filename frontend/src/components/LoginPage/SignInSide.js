import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

//const axios = require('axios');  // already have import, which I prefer for neatness, but Thierry uses const so idk if this is considered better

const useStyles = theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(Jigsaw.jpeg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
});

function Credits() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Link color="inherit" href="/credits">
      Credits
      </Link>
    </Typography>
  );
}

class SignInSide extends React.Component {

    constructor(props) {
        super(props);
        this.handleSignIn = this.handleSignIn.bind(this);
    }

    handleSignIn = (e) => {
        // prevent from refreshing the page on submit
        e.preventDefault();
        const user = { email: this.email.value, password: this.password.value }

        axios
            .post('http://localhost:3000/api/signin/', user)
            .then(() => window.location.href = '/')
            .catch(err => {
                console.error(err);  // TODO: change this to be user-friendly error
            });
    };


    render() {
        return (
            <Grid container component="main" className={this.props.classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={this.props.classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={this.props.classes.paper}>
                        <Link variant="h1" color="primary" href="/">
                            Jigsaw
                  </Link>
                        <Avatar className={this.props.classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                  </Typography>
                        <form className={this.props.classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                inputRef={node => {
                                    this.email = node;
                                }}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                inputRef={node => {
                                    this.password = node;
                                }}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={this.props.classes.submit}
                                //onClick="location.href='/main'"
                                onClick={this.handleSignIn}
                            >
                                Sign In
                    </Button>
                            <Grid container>
                                <Grid item>
                                    <Link href="/signup" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Box mt={5}>
                                <Credits />
                            </Box>
                        </form>
                    </div>
                </Grid>
            </Grid>
        );
    }
}
export default (withStyles(useStyles, { withTheme: true })(SignInSide));