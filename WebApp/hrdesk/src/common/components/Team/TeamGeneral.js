import React, { Component } from "react";
import { styles } from "./TeamStyles";
import { withRouter } from "react-router-dom";
import {
  Paper,
  Grid,
  Container,
  CssBaseline,
  withStyles,
} from "@material-ui/core";
import CustomCard from "./UIComponents/CustomCard";

class TeamGeneral extends Component {
  constructor(props) {
    super();
    this.state = {
      users: [
        {
          name: "Andrei Cristian Marcu",
          room: "Room B",
          function: "Software Developer",
        },
        {
          name: "Andrei Cristian Marcu",
          room: "Room B",
          function: "Developer",
        },
        {
          name: "Andrei Cristian Marcu",
          room: "Room B",
          function: "Developer",
        },
        {
          name: "Andrei Cristian Marcu",
          room: "Room B",
          function: "Developer",
        },
        {
          name: "Andrei Cristian Marcu",
          room: "Room B",
          function: "Developer",
        },
        {
          name: "Andrei Cristian Marcu",
          room: "Room B",
          function: "Developer",
        },
        {
          name: "Andrei Cristian Marcu",
          room: "Room B",
          function: "Developer",
        },
        {
          name: "Andrei Cristian Marcu",
          room: "Room B",
          function: "Developer",
        },
        {
          name: "Andrei Cristian Marcu",
          room: "Room B",
          function: "Developer",
        },
        {
          name: "Andrei Cristian Marcu",
          room: "Room B",
          function: "Developer",
        },
        {
          name: "Andrei Cristian Marcu",
          room: "Room B",
          function: "Developer",
        },
        {
          name: "Andrei Cristian Marcu",
          room: "Room B",
          function: "Developer",
        },
        {
          name: "Andrei Cristian Marcu",
          room: "Room B",
          function: "Developer",
        },
        {
          name: "Andrei Cristian Marcu",
          room: "Room B",
          function: "Developer",
        },
        {
          name: "Andrei Cristian Marcu",
          room: "Room B",
          function: "Developer",
        },
        {
          name: "Andrei Cristian Marcu",
          room: "Room B",
          function: "Developer",
        },
        {
          name: "Andrei Cristian Marcu",
          room: "Room B",
          function: "Developer",
        },
        {
          name: "Andrei Cristian Marcu",
          room: "Room B",
          function: "Developer",
        },
        {
          name: "Andrei Cristian Marcu",
          room: "Room B",
          function: "Developer",
        },
        {
          name: "Andrei Cristian Marcu",
          room: "Room B",
          function: "Developer",
        },
        {
          name: "Andrei Cristian Marcu",
          room: "Room B",
          function: "Developer",
        },
        {
          name: "Andrei Cristian Marcu",
          room: "Room B",
          function: "Developer",
        },
      ],
    };
  }
  render() {
    const { classes } = this.props;
    const users = this.state.users.map((user, index) => (
      <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={index}>
        <CustomCard user={user} />
      </Grid>
    ));
    return (
      <div className={classes.root}>
        <CssBaseline />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="xl" className={classes.container}>
            <Grid container spacing={4}>
              {users}
            </Grid>
          </Container>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(withRouter(TeamGeneral));
