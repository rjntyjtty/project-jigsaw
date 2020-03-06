import React from 'react';
import CodeEditor from '../CodeEditor/CodeEditor'
import { withStore } from '../../store';
import ModelRenderer from '../ModelRenderer/ModelRenderer';

class EditPage extends React.Component {

    constructor() {
        super();

    }

    render() {
        return (
            <div class='edit-page'>
                <CodeEditor />
                <ModelRenderer />
            </div>
        )
    }

}

export default withStore(EditPage);