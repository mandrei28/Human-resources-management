import React, { Component } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { DataGrid } from "@material-ui/data-grid";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import {
  Paper,
  Grid,
  Container,
  CssBaseline,
  withStyles,
  Button,
} from "@material-ui/core";
import { styles } from "./MeetingsStyles";
import SearchIcon from "@material-ui/icons/Search";
import { withRouter } from "react-router-dom";

class MeetingsGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: {
        startDate: new Date(),
        endDate: new Date(),
      },
      meetings: [],
    };
    this.columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "title", headerName: "Title", width: 280 },
      {
        field: "startDate",
        type: "date",
        headerName: "Start date",
        width: 270,
        valueFormatter: (params) =>
          params.value.replace("T", " ").split(".")[0],
      },
      {
        field: "endDate",
        type: "date",
        headerName: "End date",
        width: 270,
        valueFormatter: (params) =>
          params.value.replace("T", " ").split(".")[0],
      },
      { field: "roomName", headerName: "Room", width: 260 },
    ];
  }

  async componentDidMount() {
    console.info(this.state);
    var meetings = await this.props.onGetMeetings(this.state.dates);
    await this.setState({ meetings });
  }

  fetchData = async () => {
    var meetings = await this.props.onGetMeetings(this.state.dates);
    await this.setState({ meetings });
  };

  handleDateFieldChange = (value, field) => {
    this.setState((prevState) => {
      const { dates } = prevState;
      dates[field] = value;
      return { dates };
    });
  };

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
                <Grid item xs={12} sm={12} md={6} lg={2}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date"
                    label="Start date"
                    fullWidth
                    required
                    value={this.state.dates.startDate}
                    onChange={(event) =>
                      this.handleDateFieldChange(event, "startDate")
                    }
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={2}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date"
                    label="End date"
                    fullWidth
                    required
                    value={this.state.dates.endDate}
                    onChange={(event) =>
                      this.handleDateFieldChange(event, "endDate")
                    }
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={1}
                  sm={1}
                  md={1}
                  lg={1}
                  style={{ paddingTop: "20px" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<SearchIcon />}
                    onClick={this.fetchData}
                  >
                    Search
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={12}
                  lg={12}
                  style={{ paddingTop: "20px" }}
                >
                  <Paper className={classes.paper}>
                    <div style={{ height: 560, width: "100%" }}>
                      <DataGrid
                        rows={this.state.meetings}
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
  withRouter(MeetingsGeneral)
);
