import React from 'react';
import {connect} from 'react-redux';
import playground from './playground';

require('./ModelRenderer.css')

class ModelRenderer extends React.Component {

    constructor() {
        super();
        this.state = {
            code: null
        }
    }

    // Render model
    render () {
        return (
            <iframe className='split right' title='model-frame' ref='renderFrame' srcDoc={playground(this.props.code)}></iframe>
        )
    }
}

const mapStateToProps = state => {
    console.log('mapping state to props');
    console.log(state.code);
    return {code: state.code}
};

export default connect(mapStateToProps)(ModelRenderer);
