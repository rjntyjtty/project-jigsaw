import React from 'react';
import CodeEditor from '../../components/CodeEditor/CodeEditor.js'
import { withStore } from '../../store';

class Edit extends React.Component {

    render() {
        return <CodeEditor className="code-editor" store={this.props.store}/>
    }

}

export default withStore(Edit);
