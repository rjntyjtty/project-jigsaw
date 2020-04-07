import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class SnackBar extends React.Component {

  render() {
    let severity = this.props.severity !== undefined? this.props.severity : "error";
    return (
      <div>
        <Snackbar open={this.props.open} autoHideDuration={6000} onClose={this.props.onClose}>
          <Alert onClose={this.props.onClose} severity={severity}>
            {this.props.message}
          </Alert>
        </Snackbar>
      </div>
    );
  }

}
export default SnackBar;
