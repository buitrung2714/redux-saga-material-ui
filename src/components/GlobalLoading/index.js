import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import style from "./style";
import loadingIcon from "../../assets/images/loading.gif";
import { compose } from "redux";
import { connect } from "react-redux";

class GlobalLoading extends Component {
  render() {
    const { classes, isLoading } = this.props;
    let xhtml = null;
    isLoading &&
      (xhtml = (
        <div className={classes.globalLoading}>
          <img src={loadingIcon} alt="Loading" className={classes.icon} />
        </div>
      ));
    return xhtml;
  }
}

const mapStateToProps = (state) => state.ui;

const withConnect = connect(mapStateToProps, null);

export default compose(withStyles(style), withConnect)(GlobalLoading);
