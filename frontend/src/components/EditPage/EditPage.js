import React from 'react';
import CodeEditor from '../CodeEditor/CodeEditor'
import ModelRenderer from '../ModelRenderer/ModelRenderer';
import { connect } from 'react-redux';
import SideDrawer from './SideDrawer';
import NavAppBar from '../NavBar/NavAppBar';
import Container from '@material-ui/core/Container';
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
        const { mobileOpen, sideDrawerOpen } = this.state;
        return (
            <div className='edit-page'>
                <NavAppBar name="Edit" hasChat="true" onOpen={this.openDrawer} />
                <Container >
                  <CodeEditor />
                  <ModelRenderer />
                  <SideDrawer open={this.state.sideDrawerOpen} onClose={this.closeDrawer} />
                </Container>
            </div>
        )
    }

}

export default connect()(EditPage);
