import React from 'react';
import { withStore } from '../../store';
import EditPage from '../../components/EditPage/EditPage.js';

class Edit extends React.Component {

    render() {
        return (
            <EditPage />
        )
    }

}

export default withStore(Edit);
