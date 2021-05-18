import React, { Component } from "react";
import { styles } from "./LeaveRequestStyles";
import { withRouter } from "react-router-dom";
import {
  Paper,
  Grid,
  Container,
  CssBaseline,
  withStyles,
} from "@material-ui/core";

class LeaveRequestGeneral extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12} align="center">
                TEST
              </Grid>
            </Grid>{" "}
          </Container>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  withRouter(LeaveRequestGeneral)
);
