import React, { Fragment } from "react";
import PostContent from "./PostContent";
import projectRequests from '../../requests/projectRequests'
import userRequests from '../../requests/userRequests'

class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      loggedIn: false
    }

    userRequests
        .getCurrUser()
        .then(res => {
            try {
                if (res.status === 200) {
                  this.setState({loggedIn: true});
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
            posts={this.state.posts} loggedIn={this.state.loggedIn}
          />
      </Fragment>
    );
  }
}

export default Posts;
