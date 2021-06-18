import React, { Component } from "react";
import { Paper, Container, CssBaseline } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { styles } from "./ManageRequestsStyles";
import ManageNationalDaysContainer from "./ManageNationalDays/ManageNationalDaysContainer";
import ManageLeaveRequestsContainer from "./ManageLeaveRequests/ManageLeaveRequestsContainer";
import ManageDaysoffRequestsContainer from "./ManageDaysoffRequests/ManageDaysoffRequestsContainer";

class ManageRequestsGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  handleChange = (event, newValue) => {
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
              <Tab className={classes.tabText} label="National days" />
            </Tabs>
          </Paper>
          <Container maxWidth="lg" className={classes.container}>
            {this.state.value === 0 && <ManageLeaveRequestsContainer />}
            {this.state.value === 1 && <ManageDaysoffRequestsContainer />}
            {this.state.value === 2 && <ManageNationalDaysContainer />}
          </Container>
        </main>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(
  withRouter(ManageRequestsGeneral)
);
