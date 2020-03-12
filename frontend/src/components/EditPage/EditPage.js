import React from 'react';
import CodeEditor from '../CodeEditor/CodeEditor'
import ModelRenderer from '../ModelRenderer/ModelRenderer';
import { connect } from 'react-redux';

class EditPage extends React.Component {

    render() {
        return (
            <div className='edit-page'>
                <CodeEditor />
                <ModelRenderer />
            </div>
        )
    }

}

export default connect()(EditPage);
