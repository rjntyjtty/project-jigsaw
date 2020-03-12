import React from 'react';
import CodeEditor from '../CodeEditor/CodeEditor'
import ModelRenderer from '../ModelRenderer/ModelRenderer';
import { connect } from 'react-redux';
import SideDrawer from './SideDrawer';
import NavAppBar from '../NavBar/NavAppBar';
require('./EditPage.css')
class EditPage extends React.Component {
  state = { sideDrawerOpen: true };

  closeDrawer = () => {
    this.setState({ sideDrawerOpen: false });
  };

  openDrawer = () => {
    this.setState({ sideDrawerOpen: true });
  };

    render() {
        const { mobileOpen, sideDrawerOpen } = this.state;
        return (
            <div className='edit-page'>
                <NavAppBar name="Edit"/>
                <CodeEditor />
                <ModelRenderer />
                <SideDrawer open={this.state.sideDrawerOpen} onClose={this.closeDrawer} />
            </div>
        )
    }

}

export default connect()(EditPage);
