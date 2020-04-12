import React from "react";
import {
  Drawer,
  IconButton,
  Toolbar,
  Divider,
  Typography,
  Box,
  withStyles,
  TextField,
  Button,
  ListItem,
  List,
  ListItemText
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import socketIOClient from 'socket.io-client';
import userRequests from '../../requests/userRequests'
import generateRandom from 'sillyname';
var randomColor = require('randomcolor');

const socket = socketIOClient();

require('./SideDrawer.css');

const drawerWidth = 300;

const styles = {
  minWidth: drawerWidth
};

class SideDrawer extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          classes:props.classes,
          value:'',
          room:'',
          messages: [],
          current_user: '',
          color: ''
      }

      this.messageValueChanged = this.messageValueChanged.bind(this);
      this.sendMessage = this.sendMessage.bind(this);

      if(window.location.pathname !== '/edit' && window.location.pathname !== ''){
        socket.emit('join', window.location.pathname)
      }

      socket.on('room', (room) => {
        this.setState({
          room: room
        });
      });

      socket.on('chat message', (msg) => {
        this.setState({
          messages: [...this.state.messages, {user: msg.user, value: msg.value, color: msg.color}],
          room: msg.room
        });
        this.props.onNewMessage();
      });
  }

  componentDidMount() {
    userRequests
        .getCurrUser()
        .then(res => {
          try {
            this.setState({current_user: res.data[0].firstName + " " + res.data[0].lastName});
          } catch {
            this.setState({current_user: "Anonymous " + generateRandom()});
          }
          this.setState({color: randomColor()});
        });
  }
  
  messageValueChanged(message) {
    this.setState({value: message.target.value});
  }

  sendMessage() {
    if (this.state.value) {
      socket.emit('chat message', {value: this.state.value, room: this.state.room, user: this.state.current_user, color: this.state.color});
      this.setState({
        value: ''
      });
    }
  }

  render() {
    const history = this.state.messages;
    const chatHistory = history.map( (msg, key) => {
      return (
          <ListItem id="message" key={key} style={{maxWidth: "300px"}}>
            <div className="username" id="message" style={{color: msg.color}} key={key}>{msg.user}:</div>
            <div style={{wordWrap: "break-word"}}>{msg.value}</div>
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
        <List id="messages">{chatHistory}</List>
        <form className="form">
          <TextField className="message-field" variant="outlined" value={this.state.value} onChange={this.messageValueChanged} />
          <Button className="send-message-button" variant="contained" color="primary" onClick={this.sendMessage}>Send</Button>
        </form>
      </Drawer>
    );
  }
}

export default withStyles(styles)(SideDrawer);
