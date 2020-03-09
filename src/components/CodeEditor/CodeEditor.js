import React from 'react';
import AceEditor from "react-ace";
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import compileCode from '../../store/actions';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";

require('./CodeEditor.css')

class CodeEditor extends React.Component {

    constructor() {
        super();
        this.state = {
            code:
            `var createScene = function () {

                // This creates a basic Babylon Scene object (non-mesh)
                var scene = new BABYLON.Scene(engine);

                // This creates and positions a free camera (non-mesh)
                var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

                // This targets the camera to scene origin
                camera.setTarget(BABYLON.Vector3.Zero());

                // This attaches the camera to the canvas
                camera.attachControl(canvas, true);

                // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
                var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

                // Default intensity is 1. Let's dim the light a small amount
                light.intensity = 0.7;

                // Our built-in 'sphere' shape.
                var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, scene);

                // Move the sphere upward 1/2 its height
                sphere.position.y = 1;

                // Our built-in 'ground' shape.
                var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);

                console.log(window);

                return scene;

            };`
        }
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
                onChange={(newValue) => {
                    this.setState({code: newValue})
                }}
                name="ace-editor"
                editorProps={{ $blockScrolling: true }}
                value={this.state.code}
                width="100%"
                height="100%"
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
