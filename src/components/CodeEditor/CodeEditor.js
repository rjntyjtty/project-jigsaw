import React from 'react';
import AceEditor from "react-ace";
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import compileCode from '../../store/actions';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";
 

class CodeEditor extends React.Component {

    constructor() {
        super();
        this.state = {
            code: ''
        }
    }

    // https://github.com/securingsincity/react-ace/issues/181
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.code !== nextState.code;
    }

    // Render editor
    render () {
        return (
        <div className="code-editor">
            <AceEditor
                mode="javascript"
                theme="dracula"
                onChange={(newValue) => {
                    this.setState({code: newValue})
                }}
                name="ace-editor"
                editorProps={{ $blockScrolling: true }}
                value={this.state.code}
            />
            <Button className="compile-button" variant="contained" color="primary" onClick={()=> this.props.compileCode(this.state.code)}>Compile</Button>
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