import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import TaskItem from "../TaskItem";
import styles from "./style";

class Tasklist extends Component {
  render() {
    const { tasks, status } = this.props;
    return <TaskItem tasks={tasks} status={status} />;
  }
}

export default withStyles(styles)(Tasklist);
