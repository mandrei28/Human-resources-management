import React, { Component } from "react";
import { Paper, Container, CssBaseline } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { styles } from "./ManageRequestsStyles";
import ManageLeaveRequestsGeneral from "./ManageLeaveRequests/ManageLeaveRequestsGeneral";
import ManageDaysoffRequestsGeneral from "./ManageDaysoffRequests/ManageDaysoffRequestsGeneral";

class ManageRequestsGeneral extends Component {
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
              <Tab className={classes.tabText} label="Leave requests" />
              <Tab className={classes.tabText} label="Dayoff requests" />
            </Tabs>
          </Paper>
          <Container maxWidth="lg" className={classes.container}>
            {this.state.value === 0 && <ManageLeaveRequestsGeneral />}
            {this.state.value === 1 && <ManageDaysoffRequestsGeneral />}
          </Container>
        </main>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(
  withRouter(ManageRequestsGeneral)
);
