import React from 'react';
import LoginPage from '../../components/LoginPage/LoginPage'

class Login extends React.Component {

    render() {
        return <LoginPage className="cldi-login-page" store={this.props.store}/>
    }

}

export default Login;
