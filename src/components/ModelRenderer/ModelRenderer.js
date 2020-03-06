import React from 'react';
import * as Babylon from 'babylonjs';
import { withStore } from '../../store'

class ModelRenderer extends React.Component {

    constructor() {
        super();
        this.state = {
            engine: new Babylon.Engine(this.refs.renderCanvas, true),
            scene: null
        }
        this.handleCodeUpdate = this.handleCodeUpdate.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.state.engine.resize());
    }

    componentWillUnmount() {
        window.removeEventListener('resize', () => this.state.engine.resize());
    }

    handleCodeUpdate(code) {
        this.setState({scene: code()});
        this.state.engine.runRenderLoop(function() {
                this.state.scene.render();
        });
    }

    // Render canvas
    render () {
        return (
        <canvas ref="renderCanvas"></canvas>
    )}
}

export default withStore(ModelRenderer);