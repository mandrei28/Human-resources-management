import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { styles } from "./HolidayCalendarStyles";
import { withStyles, CssBaseline, Container } from "@material-ui/core";
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";

class HolidayCalendarGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = { appointments: [] };
  }
  async componentDidMount() {
    const calendar = await this.props.onGetHolidayCalendar();
    await this.setState({ appointments: calendar });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="xl" className={classes.container}>
            <Paper>
              <Scheduler data={this.state.appointments}>
                <ViewState defaultCurrentDate={new Date()} />
                <MonthView />
                <Toolbar />
                <DateNavigator />
                <TodayButton />
                <Appointments />
              </Scheduler>
            </Paper>
          </Container>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  withRouter(HolidayCalendarGeneral)
);
