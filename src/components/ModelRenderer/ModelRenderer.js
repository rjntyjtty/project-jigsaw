import React from 'react';
import * as Babylon from 'babylonjs';
import {connect} from 'react-redux';

require('./ModelRenderer.css')

class ModelRenderer extends React.Component {

    constructor() {
        super();
        this.state = {
            code: null,
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
          <div className="split right">
            <canvas ref="renderCanvas"></canvas>
          </div>
    )}
}

const mapStateToProps = state => {
    return {code: state.code}
};

export default connect(mapStateToProps)(ModelRenderer);
