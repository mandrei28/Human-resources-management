import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { withRouter } from "react-router-dom";
import {
  ViewState,
  GroupingState,
  IntegratedGrouping,
  IntegratedEditing,
  EditingState,
} from "@devexpress/dx-react-scheduler";
import { styles } from "./BookStyles";
import {
  Scheduler,
  DayView,
  Appointments,
  Resources,
  GroupingPanel,
  AppointmentTooltip,
  AppointmentForm,
  Toolbar,
  ViewSwitcher,
  AllDayPanel,
  DragDropProvider,
  DateNavigator,
} from "@devexpress/dx-react-scheduler-material-ui";
import DateFnsUtils from "@date-io/date-fns";
import { blue, orange } from "@material-ui/core/colors";
import { withStyles, CssBaseline, Grid, Container } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const currentDate = "2018-11-01";
const resources = [
  {
    fieldName: "roomId",
    title: "Room",
    instances: [
      { text: "Room A", id: 1, color: blue },
      { text: "Room B", id: 2, color: orange },
      { text: "Room C", id: 3, color: orange },
      { text: "Room D", id: 4, color: orange },
      { text: "Room E", id: 5, color: orange },
      { text: "Room E", id: 6, color: orange },
      { text: "Room E", id: 7, color: orange },
      { text: "Room E", id: 8, color: orange },
      { text: "Room E", id: 9, color: orange },
      { text: "Room E", id: 10, color: orange },
    ],
  },
  {
    fieldName: "teamId",
    title: "Team",
    instances: [
      { text: "Team A", id: 1, color: blue },
      { text: "Team B", id: 2, color: orange },
      { text: "Team C", id: 3, color: orange },
      { text: "Team D", id: 4, color: orange },
      { text: "Team E", id: 5, color: orange },
      { text: "Team E", id: 6, color: orange },
      { text: "Team E", id: 7, color: orange },
      { text: "Team E", id: 8, color: orange },
      { text: "Team E", id: 9, color: orange },
      { text: "Team E", id: 10, color: orange },
    ],
  },
];
const grouping = [
  {
    resourceName: "roomId",
  },
];

class BookGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          startDate: new Date(2018, 4, 30, 9, 0),
          endDate: new Date(2018, 4, 30, 11, 0),
          title: "Meeting1",
          roomId: 4,
          allDay: false,
          teamId: 4,
          id: 1,
        },
        {
          startDate: new Date(2018, 4, 30, 9, 0),
          endDate: new Date(2018, 4, 30, 11, 0),
          title: "Meeting2",
          roomId: 5,
          allDay: false,
          teamId: 1,
          id: 3,
        },
      ],
    };
  }
  onCommitChanges = ({ added, changed, deleted }) => {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
        //this.props.addNewAppointment(data[startingAddedId]);
        debugger;
      }
      if (changed) {
        var appointmentIndex = data.findIndex(
          (appointment) => changed[appointment.id]
        );
        data = data.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        );
        //this.props.updateAppointment(data[appointmentIndex]);
      }
      if (deleted !== undefined) {
        data = data.filter((appointment) => appointment.id !== deleted);
        //this.props.deleteAppointment(deleted);
        debugger;
      }
      return { data };
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="xl" className={classes.container}>
            <Scheduler data={this.state.data} height={755}>
              <ViewState defaultCurrentDate="2018-05-30" />
              <EditingState onCommitChanges={this.onCommitChanges} />
              <GroupingState grouping={grouping} />
              <DayView startDayHour={8} endDayHour={20} cellDuration={60} />
              <Appointments />
              <Resources data={resources} mainResourceName="roomId" />

              <IntegratedGrouping />
              <IntegratedEditing />
              <AppointmentTooltip />
              <AppointmentForm />

              <GroupingPanel />
              <Toolbar />
              {/* <ViewSwitcher /> */}
              <DragDropProvider />
              <DateNavigator />
            </Scheduler>
          </Container>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(withRouter(BookGeneral));
