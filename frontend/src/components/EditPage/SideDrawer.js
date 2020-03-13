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

require('./SideDrawer.css');

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
          value:'',
          room:'',
          messages: []
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

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
          messages: [...this.state.messages, msg.value],
          room: msg.room
        })
        //window.scrollTo(0, document.body.scrollHeight);
      })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    socket.emit('chat message', {chat: this.state.value, room: this.state.room});
    event.preventDefault();
    this.setState({
      value: ''
    });
  }

  render() {
    const history = this.state.messages;
    console.log(history);
    const chatHistory = history.map( (msg, key) => {
      return (
          <li id="message" key={key}>{msg}</li>
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
          <ul id="messages">{chatHistory}</ul>
          <form className="form" onSubmit={this.handleSubmit}>
            <input className="input" type="text" value={this.state.value} onChange={this.handleChange} /><button className="button">Send</button>
          </form>
        </Drawer>
      );

  }
}

export default withStyles(styles)(SideDrawer);
