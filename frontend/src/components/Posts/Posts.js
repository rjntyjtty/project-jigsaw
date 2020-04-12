import React, { PureComponent, Fragment } from "react";
import PostContent from "./PostContent";
import projectRequests from '../../requests/projectRequests'
import userRequests from '../../requests/userRequests'

class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }

    userRequests
        .getCurrUser()
        .then(res => {
            try {
                if (res.status === 200) {
                  let currUser = res.data.firstName;
                  projectRequests
                      .getUserProjects(currUser)
                      .then(res => {
                          try {
                            let posts = res.data;
                            this.setState({posts: posts});
                        } catch {}
                      });
                }
          } catch {}
        });

  }

  render() {
    return (
      <Fragment>
        <PostContent
            posts={this.state.posts}
          />
      </Fragment>
    );
  }
}

export default Posts;
