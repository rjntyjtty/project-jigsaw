import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SaveIcon from '@material-ui/icons/Save';
import { mainListItems } from '../DashboardPage/listItems';
import Tooltip from '@material-ui/core/Tooltip';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Button, withStyles } from '@material-ui/core';
import userRequests from '../../requests/userRequests';
import projectRequests from '../../requests/projectRequests';
import SnackBar from '../SnackBar/SnackBar';
import copy from 'copy-to-clipboard';


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

  closeSnackBar = () => {
    this.setState({ snackOpen: false });
  };

  openSnackBar = () => {
    this.setState({ snackOpen: true });
  };

  handleSignOut = () => {
    userRequests
        .signout()
        .then(res => {
          window.location.href="/";
        });
  }

  getShareLink = () => {
    copy(window.location.href);
    this.setState({ message: "Share link copied" });
    this.setState({ snackOpen: true });
  }

  saveProject = () => {
    this.setState({ message: "Project saved!" });
    this.setState({ snackOpen: true });
    this.props.handleSave();
  }

  badge() {
    if (this.props.newMessage === true && this.props.open !== true) {
      return(
        <Badge badgeContent={"!"} color="secondary">
          <ChatIcon />
        </Badge>
      );
    } else {
      return(
        <ChatIcon />
      );
    }

  }

  messageButton() {
    if (this.props.isEdit === "true") {
      return (
        <Tooltip title={<span style={{ fontSize: "20px" }}>Messages</span>}>
          <IconButton
          color="inherit"
          onClick={this.props.onOpen}
          aria-label="Open Sidedrawer"
          >
          {this.badge()}
          </IconButton>
        </Tooltip>
      );
    }
  }

  shareButton() {
    if (this.props.isEdit === "true") {
      return (
        <Tooltip title={<span style={{ fontSize: "20px" }}>Share</span>}>
          <IconButton
          color="inherit"
          onClick={this.getShareLink}
          >
            <ShareIcon />
          </IconButton>
        </Tooltip>
      );
    }
  }

  saveButton() {
    if (this.props.isEdit === "true" && this.state.current_user !== "") {
      return (
        <Tooltip title={<span style={{ fontSize: "20px" }}>Save</span>}>
          <IconButton
          color="inherit"
          onClick={this.saveProject}
          >
            <SaveIcon />
          </IconButton>
        </Tooltip>
      );
    }
  }

  loginLogoutButton() {
    if (! this.state.current_user) {
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
    return (
      <Typography component="h1" variant="h6" color="inherit" noWrap >
        {this.state.current_user}
      </Typography>
    );
  }

  recentProjects() {
    return (
      this.state.projects.map((element, i) => (
        <ListItem button component="a" key={i} href={'/edit/' + element._id}>
          <ListItemIcon>
            <AssignmentIcon/>
          </ListItemIcon>
          <ListItemText primary={element.title} />
        </ListItem>
      ))
    );
  }

  constructor(props) {
      super(props);
      this.state = {
          open: false,
          snackOpen: false,
          current_user: null,
          message: null,
          projects: []
      }
  }

  componentDidMount() {
    userRequests
        .getCurrUser()
        .then(res => {
            try {
                if (res.status === 200)
                  this.setState({current_user: res.data.firstName})
                  let currUser = res.data._id;
                  projectRequests
                      .getUserProjects(currUser)
                      .then(res => {
                          try {
                            let projects = res.data.reverse().slice(0, 5);
                            this.setState({projects: projects});
                        } catch {}
                      });
          } catch {}
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
            {this.saveButton()}
            {this.shareButton()}
            {this.messageButton()}
            {this.username()}
            {this.loginLogoutButton()}
          </Toolbar>
        </AppBar>
        <SnackBar open={this.state.snackOpen} onClose={this.closeSnackBar} message={this.state.message} severity="success"/>
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
          <List>
            <ListSubheader inset>Recent projects</ListSubheader>
            {this.recentProjects()}
          </List>
        </Drawer>
      </div>
    );

  }
}
export default (withStyles(styles, { withTheme: true })(NavAppBar));
