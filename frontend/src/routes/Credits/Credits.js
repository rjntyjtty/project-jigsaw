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
          <li>
            <a href="https://ntotten.com/2018/07/22/nginx-on-heroku/">https://ntotten.com/2018/07/22/nginx-on-heroku/</a>
          </li>
          <li>
            <a href="https://mherman.org/blog/dockerizing-a-react-app/">https://mherman.org/blog/dockerizing-a-react-app/</a>
          </li>
          <li>
            <a href="https://github.com/securingsincity/react-ace/issues/181">https://github.com/securingsincity/react-ace/issues/181</a>
          </li>
          <li>
            <div>And a bunch of other links scattered in the code</div>
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
