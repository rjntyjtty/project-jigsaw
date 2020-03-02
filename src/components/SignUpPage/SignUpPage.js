import React from 'react';
import { withStore } from '../../store'
import SignUp from './SignUp';


class SignUpPage extends React.Component {
    render() {
        return (
            <SignUp />
        )
    }
}
export default withStore(SignUpPage)
