import { Button, Grid, withStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { Component } from "react";
import TaskForm from "../../components/TaskForm";
import Tasklist from "../../components/Tasklist";
import { STATUS_LIST } from "../../constants";
import styles from "./style";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "../../actions/task";

class Taskboard extends Component {
  state = {
    open: false,
  };

  componentDidMount() {
    const { taskCreators } = this.props;
    const { fetchTaskListRequest } = taskCreators;
    fetchTaskListRequest();
  }

  renderForm() {
    const { open } = this.state;

    const handleClose = () => this.setState({ open: false });

    let xhtml = null;
    xhtml = <TaskForm handleClose={handleClose} open={open} />;
    return xhtml;
  }

  renderBoard() {
    const { listTask } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUS_LIST.map((status) => {
          const listFiltered = listTask.filter(
            (tasks) => tasks.status === status.value
          );
          return (
            <Tasklist key={status.value} tasks={listFiltered} status={status} />
          );
        })}
      </Grid>
    );
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    const openForm = () => this.setState({ open: true });
    return (
      <div className={classes.taskboard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={openForm}
        >
          <AddIcon /> Add a new task
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listTask: state.tasks.listTask,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    taskCreators: bindActionCreators(taskActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Taskboard)
);