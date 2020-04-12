import React, { PureComponent } from "react";
import {
  Grid,
  TablePagination,
  Divider,
  Toolbar,
  Typography,
  Paper,
  Box,
  withStyles
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ConfirmationDialog from "./ConfirmationDialog";
import Button from '@material-ui/core/Button';
import PostAddBox from "./PostAddBox";
import projectRequests from '../../requests/projectRequests'

const styles = {
  dBlock: { display: "block" },
  dNone: { display: "none" },
  toolbar: {
    justifyContent: "space-between"
  }
};

class PostContent extends PureComponent {
  state = {
    page: 0,
    deletePostDialogOpen: false,
    deletePostLoading: false,
    selectedId: ""
  };

  rowsPerPage = 10;

  closeDeletePostDialog = () => {
    this.setState({
      deletePostDialogOpen: false,
      deletePostLoading: false
    });
  };

  deletePost = () => {
    console.log("remove from projects " + this.state.selectedId);
    projectRequests
        .removeUserFromProject(this.state.selectedId)
        .then(res => {
            try {
              location.reload();
          } catch {}
        }); // maybe snackbar?
  };

  onDelete = (id) => {
    this.setState({
      deletePostDialogOpen: true,
      selectedId: id
    });
  };

  handleChangePage = (__, page) => {
    this.setState({ page });
  };

  printImageGrid = () => {
    const options = [];
    options.push({
      name: "Delete",
      onClick: this.onDelete,
      icon: <DeleteIcon />
    });
    const { posts } = this.props;
    const { page } = this.state;
    if (posts.length > 0) {
      return (
        <Box p={1}>
        <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        spacing={2}
        >
            {posts
              .slice(
                page * this.rowsPerPage,
                page * this.rowsPerPage + this.rowsPerPage
              )
              .map((element, i) => (
                <Box display='flex' margin="4px" key={i}>
                  <Box flexGrow={1}>
                    <Button variant="outlined" color="primary" fullWidth={true} href={'/edit/' + element._id}>
                      {element.title}
                    </Button>
                  </Box>
                  <Button onClick={() => (this.onDelete(element._id))}>
                    <DeleteIcon />
                  </Button>
                </Box>
              ))}
          </Grid>
        </Box>
      );
    }
    return (
      <Box m={2}>
        <Typography>
          No projects added yet. Click on &quot;Add Project&quot; to create your first one.
        </Typography>
      </Box>
    );
  };

  render() {
    const { page, deletePostDialogOpen, deletePostLoading } = this.state;
    const { posts, classes } = this.props;

    return (
      <Paper>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">Your Projects</Typography>
          <PostAddBox />
        </Toolbar>
        <Divider />
        {this.printImageGrid()}
        <TablePagination
          component="div"
          count={posts.length}
          rowsPerPage={this.rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "Previous Page"
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={this.handleChangePage}
          classes={{
            select: classes.dNone,
            selectIcon: classes.dNone,
            actions: posts.length > 0 ? classes.dBlock : classes.dNone,
            caption: posts.length > 0 ? classes.dBlock : classes.dNone
          }}
          labelRowsPerPage=""
        />
        <ConfirmationDialog
          open={deletePostDialogOpen}
          title="Confirmation"
          content="Do you really want to remove this project?"
          onClose={this.closeDeletePostDialog}
          loading={deletePostLoading}
          onConfirm={this.deletePost}
        />
      </Paper>
    );
  }
}

export default withStyles(styles)(PostContent);
