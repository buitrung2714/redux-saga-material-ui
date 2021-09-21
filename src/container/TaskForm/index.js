import { Box, Button, Grid, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { Field, reduxForm } from "redux-form";
import * as modalActions from "../../actions/modal";
import * as taskActions from "../../actions/task";
import renderTextField from "../../components/FormHelper/TextField";
import { FORM_NAME } from "../../constants/form";
import styles from "./style";
import validate from "./validate";

class TaskForm extends Component {
  handleOnSubmit = (data) => {
    const { taskCreators } = this.props;
    const { addTask } = taskCreators;
    addTask(data);
  };

  render() {
    const { modalCreators, classes, handleSubmit, submitting, invalid } =
      this.props;
    const { hideModal } = modalCreators;
    return (
      <form onSubmit={handleSubmit(this.handleOnSubmit)}>
        <Grid container>
          <Grid item md={12}>
            <Field
              name="title"
              label="Title"
              component={renderTextField}
              margin="normal"
            />
          </Grid>
          <Grid item md={12}>
            <Field
              name="description"
              label="Description"
              multiline
              maxRows="4"
              margin="normal"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Box mt={2} className={classes.boxActions}>
              <Button onClick={hideModal} color="primary">
                Cancel
              </Button>
              <Box mr={1}>
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  disabled={invalid | submitting}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    modalCreators: bindActionCreators(modalActions, dispatch),
    taskCreators: bindActionCreators(taskActions, dispatch),
  };
};

const withConnect = connect(null, mapDispatchToProps);

const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate,
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(TaskForm);
