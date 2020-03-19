import React from "react";
import {
  Drawer,
  IconButton,
  Toolbar,
  Divider,
  Typography,
  Box,
  withStyles
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import socketIOClient from 'socket.io-client';
import userRequests from '../../requests/userRequests'
import generateRandom from 'sillyname';
var randomColor = require('randomcolor');

let HOST = process.env.HOST || "localhost";
let PORT = process.env.PORT || 50001;
let link = "http://" + HOST + ":" + PORT;

const socket = socketIOClient(link);

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
          messages: [],
          current_user: '',
          color: ''
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      if(window.location.pathname !== '/edit' && window.location.pathname !== ''){
        socket.emit('join', window.location.pathname)
      }

      socket.on('room', (room) => {
        this.setState({
          room: room
        })
      })

      socket.on('chat message', (msg) => {
        this.setState({
          messages: [...this.state.messages, {user: msg.user, value: msg.value, color: msg.color}],
          room: msg.room
        })
        //window.scrollTo(0, document.body.scrollHeight);
      })
  }

  componentDidMount() {
    userRequests
        .getCurrUser()
        .then(res => {
          try {
            this.setState({current_user: res.data[0].firstName + " " + res.data[0].lastName})
          } catch {
            this.setState({current_user: "Anonymous " + generateRandom()})
          }
          this.setState({color: randomColor()})
        });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    socket.emit('chat message', {value: this.state.value, room: this.state.room, user: this.state.current_user, color: this.state.color});
    event.preventDefault();
    this.setState({
      value: ''
    });
  }

  render() {
    const history = this.state.messages;
    const chatHistory = history.map( (msg, key) => {
      return (
          <li id="message" key={key}>
            <div className="username" id="message" style={{color: msg.color}} key={key}>{msg.user}:</div>
            {msg.value}
          </li>
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
