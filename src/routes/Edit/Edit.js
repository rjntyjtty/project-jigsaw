import React from 'react';
import CodeEditor from '../../components/CodeEditor/CodeEditor.js'
import ModelRenderer from '../../components/ModelRenderer/ModelRenderer.js'
import { withStore } from '../../store';

class Edit extends React.Component {

    render() {
        return (
            <div class="edit">
                <CodeEditor className="code-editor" store={this.props.store}/>
                <ModelRenderer className="model-renderer" store={this.props.store}/>
            </div>
        )
    }

}

export default withStore(Edit);
