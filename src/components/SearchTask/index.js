import React, { Component } from "react";
import { TextField, withStyles, Box } from "@material-ui/core";
import style from "./style";

class SearchTask extends Component {
  render() {
    const { classes, handleChange } = this.props;
    return (
      <Box>
        <TextField
          label="Search Task..."
          className={classes.textField}
          onChange={handleChange}
        />
      </Box>
    );
  }
}

export default withStyles(style)(SearchTask);
