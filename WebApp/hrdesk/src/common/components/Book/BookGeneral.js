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
  DragDropProvider,
} from "@devexpress/dx-react-scheduler-material-ui";
import { blue, orange } from "@material-ui/core/colors";
import { withStyles, CssBaseline } from "@material-ui/core";

const currentDate = "2018-11-01";
const schedulerData = [
  {
    startDate: new Date(2018, 4, 30, 9, 0),
    endDate: new Date(2018, 4, 30, 11, 0),
    title: "Meeting1",
    roomId: 4,
    allDay: false,
    id: 1,
  },
  {
    startDate: new Date(2018, 4, 30, 9, 0),
    endDate: new Date(2018, 4, 30, 11, 0),
    title: "Meeting2",
    roomId: 5,
    allDay: false,
    id: 2,
  },
];

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
  // {
  //   resourceName: "teamId",
  // },
];

class BookGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onCommitChanges = (props) => {
    debugger;
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <main className={classes.content}>
          <Paper>
            <Scheduler data={schedulerData} height={700}>
              <ViewState defaultCurrentDate="2018-05-30" />
              <EditingState onCommitChanges={this.onCommitChanges} />
              <GroupingState grouping={grouping} />
              <DayView startDayHour={8} endDayHour={19} cellDuration={60} />
              <Appointments />
              <Resources data={resources} mainResourceName="roomId" />

              <IntegratedGrouping />
              <IntegratedEditing />
              <AppointmentTooltip />
              <AppointmentForm />

              <GroupingPanel />
              <Toolbar />
              <ViewSwitcher />
              <DragDropProvider />
            </Scheduler>
          </Paper>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(withRouter(BookGeneral));
{
  /* <Scheduler data={schedulerData}>
<ViewState currentDate={currentDate} />
<GroupingState grouping={grouping} />
<DayView startDayHour={8} endDayHour={17} />
<Appointments />
<Resources data={resources} mainResourceName="priorityId" />
<IntegratedGrouping />
<IntegratedEditing />
<AppointmentTooltip />
<AppointmentForm />

<GroupingPanel />
<Toolbar />
<ViewSwitcher />
<DragDropProvider />
<GroupingPanel />
</Scheduler> */
}
