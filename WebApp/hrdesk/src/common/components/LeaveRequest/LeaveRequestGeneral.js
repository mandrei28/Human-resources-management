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

const top100Films = [
  { name: "Admin", id: 1 },
  { name: "Admin2", id: 2 },
];

class LeaveRequestGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: null,
    };
    this.columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "description", headerName: "Description", width: 250 },
      {
        field: "date",
        type: "date",
        headerName: "Date",
        width: 160,
      },
      {
        field: "startHour",
        type: "string",
        headerName: "Start hour",
        width: 155,
      },
      { field: "endHour", type: "string", headerName: "End hour", width: 155 },
      { field: "status", headerName: "Status", width: 150 },
      { field: "verified", headerName: "Verified By", width: 150 },
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

            return alert(JSON.stringify(thisRow, null, 4));
          };

          return (
            <div hidden={params.row.id === 1}>
              <DeleteIcon onClick={onClick} />
            </div>
          );
        },
      },
    ];

    this.rows = [
      {
        id: 1,
        description: "Snow",
        date: new Date(),
        startHour: "22:40:10",
        endHour: new Date().toLocaleTimeString(),
        status: "Approved",
        verified: null,
      },
      {
        id: 2,
        description: "Snow",
        date: new Date(),
        startHour: new Date().toLocaleTimeString(),
        endHour: new Date().toLocaleTimeString(),
        status: "Approved",
        verified: null,
      },
      {
        id: 3,
        description: "Snow",
        date: new Date(),
        startHour: new Date().toLocaleTimeString(),
        endHour: new Date().toLocaleTimeString(),
        status: "Approved",
        verified: null,
      },
      {
        id: 4,
        description: "Snow",
        date: new Date(),
        startHour: new Date().toLocaleTimeString(),
        endHour: new Date().toLocaleTimeString(),
        status: "Approved",
        verified: null,
      },
      {
        id: 5,
        description: "Snow",
        date: new Date(),
        startHour: new Date().toLocaleTimeString(),
        endHour: new Date().toLocaleTimeString(),
        status: "Approved",
        verified: null,
      },
      {
        id: 6,
        description: "Snow",
        date: new Date(),
        startHour: new Date().toLocaleTimeString(),
        endHour: new Date().toLocaleTimeString(),
        status: "Approved",
        verified: null,
      },
      {
        id: 7,
        description: "Snow",
        date: new Date(),
        startHour: new Date().toLocaleTimeString(),
        endHour: new Date().toLocaleTimeString(),
        status: "Approved",
        verified: null,
      },
      {
        id: 8,
        description: "Snow",
        date: new Date(),
        startHour: new Date().toLocaleTimeString(),
        endHour: new Date().toLocaleTimeString(),
        status: "Approved",
        verified: null,
      },
      {
        id: 9,
        description: "Snow",
        date: new Date(),
        startHour: new Date().toLocaleTimeString(),
        endHour: new Date().toLocaleTimeString(),
        status: "Approved",
        verified: null,
      },
      {
        id: 10,
        description: "Snow",
        date: new Date(),
        startHour: new Date().toLocaleTimeString(),
        endHour: new Date().toLocaleTimeString(),
        status: "Approved",
        verified: null,
      },
      {
        id: 11,
        description: "Snow",
        date: new Date(),
        startHour: new Date().toLocaleTimeString(),
        endHour: new Date().toLocaleTimeString(),
        status: "Approved",
        verified: null,
      },
    ];
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
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
                    defaultValue=""
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
                    //error={this.state.dayoff.startDate === null}
                    fullWidth
                    required
                    //value={this.state.dayoff.startDate}
                    onChange={(event) =>
                      this.handleDayoffDateFieldChange(event, "startDate")
                    }
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={2}>
                  <KeyboardTimePicker
                    margin="normal"
                    id="startHour"
                    label="Start Hour"
                    fullWidth
                    //value={selectedDate}
                    //onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={2}>
                  <KeyboardTimePicker
                    margin="normal"
                    id="endHour"
                    label="End hour"
                    fullWidth
                    //value={selectedDate}
                    //onChange={handleDateChange}
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
                  lg={2}
                  style={{ paddingTop: "19.5px" }}
                >
                  {" "}
                  <Autocomplete
                    id="combo-box-demo"
                    options={top100Films}
                    getOptionLabel={(option) => option.name}
                    fullWidth
                    value={this.state.person}
                    onChange={(event, newValue) =>
                      this.handleDayoffPersonFieldChange(newValue, "person")
                    }
                    renderInput={(params) => {
                      return (
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item lg={2} md={1} sm={1} xs={1}>
                            <AccountCircle />
                          </Grid>
                          <Grid item lg={10} md={11} sm={11} xs={11}>
                            <TextField
                              {...params}
                              //error={params.inputProps.value === ""}
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
                  <Button variant="contained" color="primary">
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
                        rows={this.rows}
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
