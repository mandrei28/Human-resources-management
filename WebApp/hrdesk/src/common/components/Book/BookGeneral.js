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
import cloneDeep from "lodash/cloneDeep";

const BooleanEditor = (props) => {
  return (
    <AppointmentForm.BooleanEditor
      {...props}
      readOnly
      style={{ display: "none" }}
    />
  );
};

const currentDate = new Date();

const grouping = [
  {
    resourceName: "roomId",
  },
];

class BookGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setupComplete: false,
      data: [],
      resources: [
        {
          fieldName: "roomId",
          title: "Room",
          instances: [],
        },
        {
          fieldName: "teamId",
          title: "Team",
          instances: [],
        },
      ],
    };
  }

  async componentDidMount() {
    const teams = await this.props.onGetTeams();
    const meetingRooms = await this.props.onGetMeetingRooms();
    var meetings = await this.props.onGetMeetings();
    meetings = this.mapMeetingsDates(meetings);
    debugger;
    await this.setState((prevState) => {
      const { resources } = prevState;
      resources[0].instances = meetingRooms;
      resources[1].instances = teams;
      return { resources, data: meetings, setupComplete: true };
    });
  }

  mapMeetingsDates = (meetings) => {
    meetings.forEach((meeting) => {
      meeting.startDate = new Date(meeting.startDate);
      meeting.endDate = new Date(meeting.endDate);
    });
    return meetings;
  };

  onCommitChanges = async ({ added, changed, deleted }) => {
    var meeting = null;
    var index = null;
    if (added) {
      meeting = await this.props.onAddMeeting(added);
    }
    if (deleted) {
      await this.props.onDeleteMeeting(deleted);
    }
    await this.setState((state) => {
      let { data } = state;
      if (added) {
        data = [...data, meeting];
      }
      if (changed) {
        console.info(this.state.data);
        debugger;
        data = data.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        );
      }
      if (deleted !== undefined) {
        data = data.filter((appointment) => appointment.id !== deleted);
      }
      return { data };
    });
    if (changed) {
      index = this.state.data.findIndex(
        (appointment) => changed[appointment.id]
      );
      await this.props.onUpdateMeeting(this.state.data[index]);
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {this.state.setupComplete && (
          <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Container maxWidth="xl" className={classes.container}>
                <Scheduler data={this.state.data} height={825}>
                  <ViewState defaultCurrentDate={currentDate} />
                  <EditingState onCommitChanges={this.onCommitChanges} />
                  <GroupingState grouping={grouping} />
                  <DayView startDayHour={8} endDayHour={20} cellDuration={60} />
                  <Appointments />
                  <Resources
                    data={this.state.resources}
                    mainResourceName="roomId"
                  />

                  <IntegratedGrouping />
                  <IntegratedEditing />
                  <AppointmentTooltip />
                  <AppointmentForm booleanEditorComponent={BooleanEditor} />

                  <GroupingPanel />
                  <Toolbar />
                  <DragDropProvider />
                  <DateNavigator />
                </Scheduler>
              </Container>
            </main>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(withRouter(BookGeneral));
