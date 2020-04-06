import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class SnackBar extends React.Component {

  render() {
    return (
      <div>
        <Snackbar open={this.props.open} autoHideDuration={6000} onClose={this.props.onClose}>
          <Alert onClose={this.props.onClose} severity="error">
            {this.props.message}
          </Alert>
        </Snackbar>
      </div>
    );
  }

}
export default SnackBar;
