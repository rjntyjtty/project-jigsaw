import React from 'react';
import AceEditor from "react-ace";
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { compileCode } from '../../store/actions';
import io from 'socket.io-client';
import generateRandom from 'sillyname';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";
import projectRequests from '../../requests/projectRequests'
import starterCode from './starterCode';

require('./CodeEditor.css')

const socket = io();

class CodeEditor extends React.Component {

    constructor() {
        super();
        this.state = {
            room:'',
            code: starterCode
        }

        if (window.location.pathname !== '/edit' && window.location.pathname !== '') {
          socket.emit('join', window.location.pathname)
        }

        socket.on('room', (room) => {
          this.setState({
            room: room
          });
        });

        socket.on('message', (code) => {
          this.setState({
            code: code.value,
            room: code.room
          });
        });

        projectRequests
        .getProject(window.location.href.split('/').slice(-1).pop())
        .then(res => {
            try {
              if (res.status === 200) { // if project exists update state code
                this.setState({code: res.data.code});
                this.props.compileCode(res.data.code);
              } else {
                this.setState({code: starterCode});
                this.props.initCode(starterCode);
                this.props.compileCode(starterCode);
              }
          } catch {}
        });
    }

    componentDidMount() {
        if (window.location.pathname === '/edit'){
          window.location.pathname = `/edit/${generateRandom().split(' ').join('')}`
        }
    }

    onChange = (newValue) => {
      this.setState({code: newValue});
      socket.emit('message', {newValue, room: this.state.room});
      this.props.onCodeUpdate(this.state.code);
    }

    // https://github.com/securingsincity/react-ace/issues/181
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.code !== nextState.code;
    }

    // Render editor
    render () {
        return (
        <div className="split left">
            <AceEditor
                mode="javascript"
                theme="dracula"
                onChange={this.onChange}
                name="ace-editor"
                editorProps={{ $blockScrolling: true }}
                value={this.state.code}
                width="100%"
                height="100%"
            />
            <Button className="compile-button" variant="contained" color="primary" onClick={() => {this.props.compileCode(this.state.code)}}>Compile</Button>
        </div>
    )}
}

function mapDispatchToProps(dispatch) {
    return {
        compileCode: code => dispatch(compileCode({code: code}))
    };
};

// TODO :: undo for collab edit
// var rev = session.$undoManager.startNewGroup(); // start new undo group
// ... // apply the edit
// session.$undoManager.markIgnored(rev); // mark the new group as ignored

export default connect(null, mapDispatchToProps)(CodeEditor);
