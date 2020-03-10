import React from 'react';
import * as BABYLON from 'babylonjs';
import {connect} from 'react-redux';

class ModelRenderer extends React.Component {

    constructor() {
        super();
        this.state = {
            code: null,
            createScene: null,
            engine: new BABYLON.Engine(this.refs.renderCanvas, true),
            scene: null
        }
    }

    componentWillMount() {
        window.addEventListener('resize', () => this.state.engine.resize());
    }

    componentWillUnmount() {
        window.removeEventListener('resize', () => this.state.engine.resize());
    }

    componentDidUpdate(oldProps) {
        console.log('renderer updated');
        // if (oldProps.scene !== this.props.scene) {
            if (oldProps.scene != null) {
                oldProps.scene.dispose();
            }
            let createScene = function(){};
            console.log(this.state);
            // eval(this.props.code);
            let scene = createScene(window, this.state.engine, this.refs.renderCanvas);
            if (scene) {
                    this.state.engine.runRenderLoop(function() {
                    scene.render();
                });
            }
        // }
    }

    onCanvasLoaded = (canvas) => {
        if (canvas !== null) {
            this.state.canvas = canvas;
        }
    }

    // Render canvas
    render () {
        return (
        <canvas ref={this.onCanvasLoaded} />
    )}
}

const mapStateToProps = state => {
    console.log(state);
    return {code: state.code}
};

export default connect(mapStateToProps)(ModelRenderer);