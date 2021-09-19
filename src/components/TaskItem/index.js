import {
  Box,
  Card,
  CardActions,
  CardContent,
  Fab,
  Grid,
  Icon,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import styles from "./style";

class Tasklist extends Component {
  render() {
    const { classes, tasks, status } = this.props;
    return (
      <Grid item key={status.value} md={4} xs={12}>
        <Box mt={2} mb={2}>
          {status.label}
        </Box>
        <Box>
          {tasks.map((task) => {
            const { title, id, description } = task;
            return (
              <Card key={id} className={classes.card}>
                <CardContent>
                  <Grid container justify="space-between">
                    <Grid item md={8}>
                      <Typography component="h1">{title}</Typography>
                    </Grid>
                    <Grid item md={4}>
                      {status.label}
                    </Grid>
                  </Grid>
                  <Typography component="label">{description}</Typography>
                </CardContent>

                <CardActions className={classes.cardActions}>
                  <Fab size="small" variant="circular" color="primary">
                    <Icon size="small">edit_icon</Icon>
                  </Fab>
                  <Fab size="small" variant="circular" color="primary">
                    <Icon size="small">delete_icon</Icon>
                  </Fab>
                </CardActions>
              </Card>
            );
          })}
        </Box>
      </Grid>
    );
  }
}

export default withStyles(styles)(Tasklist);
