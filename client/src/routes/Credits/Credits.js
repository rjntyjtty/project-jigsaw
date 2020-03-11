import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

class Credits extends React.Component {

    render() {
      return(
        <div>
          <h1>Credits:</h1>
          <li>
            <a href="https://material-ui.com/">Page Templates</a>
          </li>
          <li>
            <a href="https://medium.com/lessons-from-ordinary/lesson-from-a-jigsaw-puzzle-d5f9a8136805">Login Page Image</a>
          </li>
          <Typography variant="body2" color="textSecondary" align="center">
            <Link color="inherit" href="/">
            Home
            </Link>
          </Typography>
        </div>
        
      )
    }

}

export default Credits;
