import React, { Component } from "react";
import { Paper, Container, CssBaseline } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { styles } from "./ManageOrganizationStyles";
import ManageTeamsGeneral from "./ManageTeams/ManageTeamsGeneral";
import ManageRoomsGeneral from "./ManageRooms/ManageRoomsGeneral";
import ManageFunctionsContainer from "./ManageFunctions/ManageFunctionsContainer";

class ManageOrganizationGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  handleChange = (event, newValue) => {
    debugger;
    this.setState({ value: newValue });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />{" "}
          <Paper>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              aria-label="simple tabs example"
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab className={classes.tabText} label="Teams" />
              <Tab className={classes.tabText} label="Functions" />
              <Tab
                className={classes.tabText}
                label="Meeting rooms and offices"
              />
            </Tabs>
          </Paper>
          <Container maxWidth="lg" className={classes.container}>
            {this.state.value === 0 && <ManageTeamsGeneral />}
            {this.state.value === 1 && <ManageFunctionsContainer />}
            {this.state.value === 2 && <ManageRoomsGeneral />}
          </Container>
        </main>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(
  withRouter(ManageOrganizationGeneral)
);
