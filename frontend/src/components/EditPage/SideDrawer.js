import React from "react";
import PropTypes from "prop-types";
import {
  Drawer,
  IconButton,
  Toolbar,
  Divider,
  Typography,
  Box,
  List,
  withStyles
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ChatIcon from '@material-ui/icons/Chat';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import socketIOClient from 'socket.io-client';
const socket = socketIOClient('http://localhost:5000');

const drawerWidth = 300;

const styles = {
  minWidth: drawerWidth
};

class SideDrawer extends React.Component {
  //const { classes, onClose, open } = props;
  constructor(props) {
      super(props);

      this.state = {
          classes:props.classes,
          room:'',
          messages: ["hello", "goodbye"]
      }

      if(window.location.pathname !== '/edit' && window.location.pathname !== ''){
        socket.emit('join', window.location.pathname)
      }

      socket.on('room', (room) => {
        console.log(room)
        this.setState({
          room: room
        })
      })

      socket.on('chat message', (msg) => {
        this.setState({
          messages: this.messages.push(msg.value),
          room: msg.room
        })
      })
  }

  render() {
    const history = this.state.messages;
    const chatHistory = history.map( msg => {
      return (
        <ListItem>
          <ListItemText primary={msg} />
        </ListItem>
      );
    });

      return (
        <Drawer anchor="right" open={this.props.open} variant="persistent" >
        <Toolbar disableGutters style={styles}>
        </Toolbar>
          <Toolbar disableGutters style={styles}>
            <Box
              pl={3}
              pr={3}
              display="flex"
              justifyContent="space-between"
              width="100%"
              alignItems="center"
            >
              <Typography variant="h6">Chat</Typography>
              <IconButton
                onClick={this.props.onClose}
                color="primary"
                aria-label="Close Sidedrawer"
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </Toolbar>
          <Divider />
          <List>
          {chatHistory}
          </List>
        </Drawer>
      );

  }
}

export default withStyles(styles)(SideDrawer);
