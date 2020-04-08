import React from 'react';
import CodeEditor from '../CodeEditor/CodeEditor'
import ModelRenderer from '../ModelRenderer/ModelRenderer';
import { connect } from 'react-redux';
import SideDrawer from '../SideDrawer/SideDrawer';
import NavAppBar from '../NavBar/NavAppBar';
require('./EditPage.css')

class EditPage extends React.Component {
  state = { sideDrawerOpen: false, newMessage: false };

  closeDrawer = () => {
    this.setState({ sideDrawerOpen: false, newMessage: false });
  };

  openDrawer = () => {
    this.setState({ sideDrawerOpen: true, newMessage: false });
  };

  onNewMessage = () => {
    this.setState({ newMessage: true });
  };

    render() {
        return (
            <div className='edit-page'>
                <NavAppBar name="Edit" isEdit="true" open={this.state.sideDrawerOpen} onOpen={this.openDrawer} newMessage={this.state.newMessage} />
                <main>
                  <CodeEditor />
                  <ModelRenderer />
                </main>
                <SideDrawer open={this.state.sideDrawerOpen} onClose={this.closeDrawer} onNewMessage={this.onNewMessage} />
            </div>
        )
    }

}

export default connect()(EditPage);
