import React, { PureComponent, Fragment } from "react";
import PostContent from "./PostContent";

class Posts extends PureComponent {

  render() {
    return (
      <Fragment>
        <PostContent
            posts={[]}
          />
      </Fragment>
    );
  }
}

export default Posts;
