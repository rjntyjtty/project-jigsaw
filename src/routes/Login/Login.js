import React from 'react';
import LoginPage from '../../components/LoginPage/LoginPage'
import { withStore } from '../../store';

class Login extends React.Component {

    render() {
      /*return(
        <div>
          <h1>Login stuffs here</h1>
        </div>
      )*/
        return <LoginPage className="cldi-login-page" store={this.props.store}/>
    }

}

export default withStore(Login);
