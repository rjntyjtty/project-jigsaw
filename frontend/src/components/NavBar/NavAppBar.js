import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import { mainListItems, secondaryListItems } from '../DashboardPage/listItems';
import { Button, withStyles } from '@material-ui/core';
import userRequests from '../../requests/userRequests'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    height: '100vh',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  link: {
    margin: theme.spacing(1, 1),
  },
});

class NavAppBar extends React.Component {

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  handleSignOut = () => {
    userRequests
        .signout()
        .then(res => {
          window.location.href="/";
        });
  }

  messageButton() {
    if (this.props.hasChat == "true") {
      return (
        <IconButton
        color="inherit"
        onClick={this.props.onOpen}
        aria-label="Open Sidedrawer"
        >
          <Badge badgeContent={"!"} color="secondary">
            <ChatIcon />
          </Badge>
        </IconButton>
      );
    }
  }

  loginLogoutButton() {
    if (this.state.current_user == "") {
      return (
          <Button
            href="/login"
            color="inherit"
            variant="outlined"
            className={this.props.classes.link}>
            Login
          </Button>
      );
    } else {
      return (
          <Button
            onClick={this.handleSignOut}
            color="inherit"
            variant="outlined"
            className={this.props.classes.link}>
            Sign out
          </Button>
      );
    }
  }

  username() {
    if (this.state.current_user != "") {
      return (
        <Typography component="h1" variant="h6" color="inherit" noWrap >
          {this.state.current_user}
        </Typography>
      );
    }
  }

  constructor(props) {
      super(props);

      this.state = {
          open: false,
          current_user: ""
      }

  }

  componentDidMount() {
    userRequests
        .getCurrUser()
        .then(res => {
          try {
            this.setState({current_user: res.data[0].firstName})
          } catch {
            console.log(res.data);
          }
          //console.log(res.data[0].firstName);
        });
  }
  render(){
    const open = this.state.open;

    return (
      <div className={this.props.classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={clsx(this.props.classes.appBar, open && this.props.classes.appBarShift)}>
          <Toolbar className={this.props.classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={clsx(this.props.classes.menuButton, open && this.props.classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={this.props.classes.title}>
              {this.props.name}
            </Typography>
            {this.username()}
            {this.messageButton()}
            {this.loginLogoutButton()}
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(this.props.classes.drawerPaper, !open && this.props.classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={this.props.classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
      </div>
    );

  }
}
export default (withStyles(styles, { withTheme: true })(NavAppBar));
