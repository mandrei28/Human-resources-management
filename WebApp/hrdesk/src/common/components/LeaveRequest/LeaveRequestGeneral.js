import React, { Component } from "react";
import { styles } from "./LeaveRequestStyles";
import { withRouter } from "react-router-dom";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DeleteIcon from "@material-ui/icons/Delete";
import { DataGrid } from "@material-ui/data-grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import {
  Paper,
  Grid,
  Container,
  CssBaseline,
  withStyles,
  Button,
} from "@material-ui/core";

class LeaveRequestGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaveRequests: [],
      admins: [],
      leaveRequest: {
        adminModel: null,
        description: "",
        startDate: new Date(),
        startHour: new Date(),
        endHour: new Date(),
      },
    };
    this.columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "description", headerName: "Description", width: 240 },
      {
        field: "startDate",
        type: "date",
        headerName: "Date",
        width: 160,
        valueFormatter: (params) => params.value.split("T")[0],
      },
      {
        field: "startHour",
        type: "string",
        headerName: "Start hour",
        width: 140,
        valueFormatter: (params) => params.value.split("T")[1].split(".")[0],
      },
      {
        field: "endHour",
        type: "string",
        headerName: "End hour",
        width: 135,
        valueFormatter: (params) => params.value.split("T")[1].split(".")[0],
      },
      {
        field: "status",
        headerName: "Status",
        width: 120,
        valueFormatter: (params) =>
          params.value === 0
            ? "Waiting"
            : params.value === 1
            ? "Refused"
            : "Approved",
      },
      { field: "verifiedBy", headerName: "Verified By", width: 260 },
      {
        field: "",
        width: 100,
        disableColumnMenu: true,
        sortable: false,
        align: "center",
        renderCell: (params) => {
          const onClick = () => {
            const api = params.api;
            const fields = api
              .getAllColumns()
              .map((c) => c.field)
              .filter((c) => c !== "__check__" && !!c);
            const thisRow = {};

            fields.forEach((f) => {
              thisRow[f] = params.getValue(f);
            });

            this.deleteLeaveRequest(thisRow.id);
          };

          return (
            <div hidden={params.row.status === 1 || params.row.status === 2}>
              <DeleteIcon onClick={onClick} />
            </div>
          );
        },
      },
    ];
  }

  async componentDidMount() {
    const admins = await this.props.onGetAdmins();
    const leaveRequests = await this.props.onGetLeaveRequests();
    await this.setState({ admins, leaveRequests });
  }

  deleteLeaveRequest = async (leaveRequestId) => {
    await this.props.onDeleteLeaveRequest(leaveRequestId);
    this.setState({
      leaveRequests: this.state.leaveRequests.filter(
        (leaveRequest, _) => leaveRequest.id !== leaveRequestId
      ),
    });
  };

  handleFieldChange = (newValue, field) => {
    this.setState((prevState) => {
      const { leaveRequest } = prevState;
      leaveRequest[field] = newValue;
      return { leaveRequest };
    });
  };

  addLeaveRequest = async () => {
    if (
      this.state.leaveRequest.description !== "" &&
      this.state.leaveRequest.admin !== null &&
      this.state.leaveRequest.startHour <= this.state.leaveRequest.endHour
    ) {
      const leaveRequestModel = await this.props.onAddLeaveRequest(
        this.state.leaveRequest
      );
      await this.setState((prevState) => ({
        leaveRequests: [leaveRequestModel, ...prevState.leaveRequests],
      }));
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="xl" className={classes.container}>
            <Grid container spacing={3} alignItems="center" justify="center">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={2}
                  style={{ paddingTop: "19.5px" }}
                >
                  <TextField
                    required
                    id="standard-required"
                    label="Short description"
                    defaultValue={this.state.leaveRequest.description}
                    onChange={(event) =>
                      this.handleFieldChange(event.target.value, "description")
                    }
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={2}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date"
                    label="Date"
                    fullWidth
                    required
                    value={this.state.leaveRequest.startDate}
                    onChange={(event) =>
                      this.handleFieldChange(event, "startDate")
                    }
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg>
                  <KeyboardTimePicker
                    margin="normal"
                    id="startHour"
                    label="Start Hour"
                    fullWidth
                    value={this.state.leaveRequest.startHour}
                    onChange={(event) =>
                      this.handleFieldChange(event, "startHour")
                    }
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg>
                  <KeyboardTimePicker
                    margin="normal"
                    id="endHour"
                    label="End hour"
                    fullWidth
                    value={this.state.leaveRequest.endHour}
                    onChange={(event) =>
                      this.handleFieldChange(event, "endHour")
                    }
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={3}
                  style={{ paddingTop: "19.5px" }}
                >
                  {" "}
                  <Autocomplete
                    id="combo-box-demo"
                    options={this.state.admins}
                    getOptionLabel={(option) =>
                      option.firstName + " " + option.lastName
                    }
                    fullWidth
                    value={this.state.leaveRequest.adminModel}
                    onChange={(event, newValue) =>
                      this.handleFieldChange(newValue, "adminModel")
                    }
                    renderInput={(params) => {
                      return (
                        <Grid container spacing={2} alignItems="flex-end">
                          <Grid item lg={1} md={1} sm={1} xs={1}>
                            <AccountCircle />
                          </Grid>
                          <Grid item lg={11} md={11} sm={11} xs={11}>
                            <TextField
                              {...params}
                              required
                              id="input-with-icon-grid"
                              label="Spoke with"
                              fullWidth
                            />
                          </Grid>
                        </Grid>
                      );
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={1}
                  sm={1}
                  md={1}
                  lg={1}
                  style={{ paddingTop: "19.5px" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ float: "right" }}
                    onClick={this.addLeaveRequest}
                  >
                    Add
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={12}
                  lg={12}
                  style={{ paddingTop: "40px" }}
                >
                  <Paper className={classes.paper}>
                    <div style={{ height: 560, width: "100%" }}>
                      <DataGrid
                        rows={this.state.leaveRequests}
                        columns={this.columns}
                        pageSize={10}
                        rowHeight={45}
                        disableSelectionOnClick={true}
                      />
                    </div>
                  </Paper>
                </Grid>
              </MuiPickersUtilsProvider>
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
