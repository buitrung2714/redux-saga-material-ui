import React, { Component } from "react";
import style from "./style";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import { withStyles, Modal, Box, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Clear";
import * as modalActions from "../../actions/modal";

class CommonModal extends Component {
  render() {
    const { classes, open, title, component, modalCreators } = this.props;
    const { hideModal } = modalCreators;
    return (
      <Modal open={open} onClose={hideModal} className={classes.modal}>
        <Box className={classes.paper}>
          <Box className={classes.header}>
            <Typography variant="subtitle1" className={classes.title}>
              {title}
            </Typography>
            <CloseIcon className={classes.icon} onClick={hideModal} />
          </Box>
          <Box className={classes.content}>{component}</Box>
        </Box>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    open: state.modal.showModal,
    title: state.modal.title,
    component: state.modal.component,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalCreators: bindActionCreators(modalActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(style), withConnect)(CommonModal);
