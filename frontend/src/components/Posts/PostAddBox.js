import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import starterCode from '../CodeEditor/starterCode';
import projectRequests from '../../requests/projectRequests'
import generateRandom from 'sillyname';

class PostAddBox extends React.Component {
  constructor() {
    super();
    this.state = {
        open: false
    }
  }

  handleClickOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleNewProject = (e) => {
    e.preventDefault();

    let link = window.location.pathname = `/edit/${generateRandom().split(' ').join('')}`
    let permalink = link.split('/').slice(-1).pop();
    let project = {permalink: permalink, title: this.name.value, code: starterCode};

    projectRequests
        .addProject(project)
        .then(res => {
            try {
              window.location.replace(link);
          } catch {}
        });
  }

  render() {
    return (
      <div>
        <Button variant="outlined" color="secondary" onClick={this.handleClickOpen}>
          Add Project
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">New Project</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add a new project.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Project Name"
              type="project name"
              inputRef={node => {
                  this.name = node;
              }}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.handleNewProject} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default PostAddBox
