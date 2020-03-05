import React from 'react';
import AceEditor from "react-ace";
import { withStore } from '../../store'

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";
 

class CodeEditor extends React.Component {

    // Render editor
    render () {
        return (
        <AceEditor
            mode="javascript"
            theme="dracula"
            placeholder={placeholder()}
            onChange={onChange}
            name="ace-editor"
            editorProps={{ $blockScrolling: true }}
        />
    )}
}


// TODO :: undo for collab edit
// var rev = session.$undoManager.startNewGroup(); // start new undo group
// ... // apply the edit 
// session.$undoManager.markIgnored(rev); // mark the new group as ignored


function placeholder() {
    return `import * as Babylon from 'babylonjs'`;
}

function onChange(newValue) {
    // send code to store ?
    console.log("change", newValue);
}

export default withStore(CodeEditor);