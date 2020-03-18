import React from 'react';
import CodeEditor from '../CodeEditor/CodeEditor'
import ModelRenderer from '../ModelRenderer/ModelRenderer';
import { connect } from 'react-redux';
import SideDrawer from '../SideDrawer/SideDrawer';
import NavAppBar from '../NavBar/NavAppBar';
require('./EditPage.css')

class EditPage extends React.Component {
  state = { sideDrawerOpen: false };

  closeDrawer = () => {
    this.setState({ sideDrawerOpen: false });
  };

  openDrawer = () => {
    this.setState({ sideDrawerOpen: true });
  };

    render() {
        return (
            <div className='edit-page'>
                <NavAppBar name="Edit" hasChat="true" onOpen={this.openDrawer} />
                <main>
                  <CodeEditor />
                  <ModelRenderer />
                </main>
                <SideDrawer open={this.state.sideDrawerOpen} onClose={this.closeDrawer} />
            </div>
        )
    }

}

export default connect()(EditPage);
