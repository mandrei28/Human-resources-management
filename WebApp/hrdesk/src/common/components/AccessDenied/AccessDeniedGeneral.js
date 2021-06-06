import React, { Component } from "react";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import { styles } from "./AccessDeniedStyles";
import { withRouter } from "react-router-dom";
import {
  withStyles,
  CssBaseline,
  Grid,
  Container,
  Typography,
} from "@material-ui/core";

class AccessDeniedGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <main className={classes.content}>
          <Container maxWidth="sm">
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
              style={{ minHeight: "100vh" }}
            >
              <Grid item sm={12} md={12} lg={12} xl={12}>
                <Typography component="h1" variant="h4" color="inherit" noWrap>
                  Missing permission
                </Typography>
              </Grid>
              <NotInterestedIcon
                color="error"
                style={{ width: "500px", height: "500px" }}
              />
            </Grid>
          </Container>
        </main>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(
  withRouter(AccessDeniedGeneral)
);
