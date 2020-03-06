import React from 'react';
import AceEditor from "react-ace";
import Button from '@material-ui/core/Button';
import { withStore } from '../../store'

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

    renderCode() {
        this.props.store.set("renderCode", this.state.code);
    }

    // Render editor
    render () {
        return (
        <div class="code-editor">
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
            <Button className="compile-button" variant="contained" color="primary" onClick={()=> this.renderCode}>Compile</Button>
        </div>
    )}
}

// TODO :: undo for collab edit
// var rev = session.$undoManager.startNewGroup(); // start new undo group
// ... // apply the edit 
// session.$undoManager.markIgnored(rev); // mark the new group as ignored

export default withStore(CodeEditor);