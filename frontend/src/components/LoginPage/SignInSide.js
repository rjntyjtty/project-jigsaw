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
import userRequests from '../../requests/userRequests'
import SnackBar from '../SnackBar/SnackBar';

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
        this.state = {
          open: false
        }
        this.handleSignIn = this.handleSignIn.bind(this);
    }

    closeSnackBar = () => {
      this.setState({ open: false });
    };

    openSnackBar = () => {
      this.setState({ open: true });
    };

    handleSignIn = (e) => {
        // prevent from refreshing the page on submit
        e.preventDefault();
        const user = { email: this.email.value, password: this.password.value }

        userRequests
            .signin(user)
            .then((res) => {
                if (res.status !== 200) {
                    this.setState({open: true});
                } else {
                    window.location.href = '/';
                }
            })
            .catch(err => {
                console.log("error on signin b/c fake account");
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
                        <SnackBar open={this.state.open} onClose={this.closeSnackBar} message="Incorrect email or password"/>
                        <form className={this.props.classes.form} onSubmit={this.handleSignIn}>
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
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={this.props.classes.submit}
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
