import React from 'react';
import CodeEditor from '../CodeEditor/CodeEditor'
import ModelRenderer from '../ModelRenderer/ModelRenderer';

class EditPage extends React.Component {

    constructor() {
        super();

    }

    render() {
        return (
            <div className='edit-page'>
                <CodeEditor />
                <ModelRenderer />
            </div>
        )
    }

}

export default EditPage;