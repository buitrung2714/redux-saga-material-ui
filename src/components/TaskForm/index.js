import {
  Box,
  Button,
  FormControl,
  Grid,
  Modal,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Clear";
import React, { Component } from "react";
import styles from "./style";

class TaskForm extends Component {
  render() {
    const { open, handleClose, classes } = this.props;
    return (
      <Modal open={open} onClose={handleClose} className={classes.modal}>
        <Box className={classes.paper}>
          <Box className={classes.header}>
            <Typography variant="span" className={classes.title}>
              New Task
            </Typography>
            <CloseIcon className={classes.icon} onClick={handleClose} />
          </Box>
          <Box className={classes.content}>
            <FormControl>
              <Grid container>
                <Grid item md={12}>
                  <TextField label="Title" fullWidth />
                </Grid>
                <Grid item md={12}>
                  <TextField label="Description" fullWidth />
                </Grid>
                <Grid item md={12}>
                  <Box mt={2} className={classes.boxActions}>
                    <Button onClick={handleClose} color="primary">
                      Cancel
                    </Button>
                    <Box mr={1}>
                      <Button
                        onClick={handleClose}
                        color="primary"
                        variant="contained"
                      >
                        Save
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </FormControl>
          </Box>
        </Box>
      </Modal>
    );
  }
}

export default withStyles(styles)(TaskForm);
