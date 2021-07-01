import React, { Component } from "react";
import { styles } from "./HardwareRequestStyles";
import { withRouter } from "react-router-dom";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DeleteIcon from "@material-ui/icons/Delete";
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
  Checkbox,
} from "@material-ui/core";
import { HardwareRequestTypes } from "../../../utils/constants";

class HardwareRequestGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hardwareRequests: [],
      hardwareRequest: {
        adminModel: null,
        description: "",
        startDate: new Date(),
        endDate: new Date(),
      },
      checked: true,
    };
    this.columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "description", headerName: "Description", width: 280 },
      {
        field: "startDate",
        type: "date",
        headerName: "Start date",
        width: 140,
        valueFormatter: (params) =>
          params.value.split("T")[0] === "0001-01-01"
            ? "Permanent"
            : params.value.split("T")[0],
      },
      {
        field: "endDate",
        type: "date",
        headerName: "End date",
        width: 140,
        valueFormatter: (params) =>
          params.value.split("T")[0] === "0001-01-01"
            ? "Permanent"
            : params.value.split("T")[0],
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
        field: "hardwareRequestType",
        headerName: "Type",
        width: 120,
        valueFormatter: (params) =>
          HardwareRequestTypes.find((a) => a.id === params.value) !== -1
            ? HardwareRequestTypes.find((a) => a.id === params.value).text
            : null,
      },
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

            this.deleteHardwareRequest(thisRow.id);
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
    const hardwareRequests = await this.props.onGetHardwareRequests();
    await this.setState({ hardwareRequests });
  }

  deleteHardwareRequest = async (hardwareRequestId) => {
    await this.props.onDeleteHardwareRequest(hardwareRequestId);
    this.setState({
      hardwareRequests: this.state.hardwareRequests.filter(
        (hardwareRequest, _) => hardwareRequest.id !== hardwareRequestId
      ),
    });
  };

  handleFieldChange = (newValue, field) => {
    this.setState((prevState) => {
      const { hardwareRequest } = prevState;
      hardwareRequest[field] = newValue;
      return { hardwareRequest };
    });
  };

  addHardwareRequest = async () => {
    if (
      this.state.hardwareRequest.startDate >
        this.state.hardwareRequest.endDate &&
      this.state.hardwareRequest.startDate !== null &&
      this.state.hardwareRequest.endDate !== null
    ) {
      return;
    }

    if (
      this.state.hardwareRequest.description !== "" &&
      this.state.hardwareRequest.admin !== null
    ) {
      const hardwareRequestModel = await this.props.onAddHardwareRequest(
        this.state.hardwareRequest
      );
      await this.setState((prevState) => ({
        hardwareRequests: [hardwareRequestModel, ...prevState.hardwareRequests],
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
                  lg={3}
                  style={{ paddingTop: "19.5px" }}
                >
                  <TextField
                    required
                    id="standard-required"
                    label="Short description"
                    defaultValue={this.state.hardwareRequest.description}
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
                    label="Start date"
                    fullWidth
                    required
                    disabled={!this.state.checked}
                    value={this.state.hardwareRequest.startDate}
                    onChange={(event) =>
                      this.handleFieldChange(event, "startDate")
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
                    disabled={!this.state.checked}
                    value={this.state.hardwareRequest.endDate}
                    onChange={(event) =>
                      this.handleFieldChange(event, "endDate")
                    }
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
                <Checkbox
                  checked={this.state.checked}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  style={{ marginTop: "25px" }}
                  onChange={(event) => {
                    if (event.target.checked) {
                      this.setState((prevState) => {
                        const { hardwareRequest } = prevState;
                        hardwareRequest.startDate = new Date();
                        hardwareRequest.endDate = new Date();
                        return { hardwareRequest, checked: true };
                      });
                    } else {
                      this.setState((prevState) => {
                        const { hardwareRequest } = prevState;
                        hardwareRequest.startDate = null;
                        hardwareRequest.endDate = null;
                        return { hardwareRequest, checked: false };
                      });
                    }
                  }}
                />
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
                    options={HardwareRequestTypes}
                    getOptionLabel={(option) => option.text}
                    fullWidth
                    value={
                      HardwareRequestTypes.find(
                        (a) =>
                          a.id ===
                          this.state.hardwareRequest.hardwareRequestType
                      ) !== -1
                        ? HardwareRequestTypes.find(
                            (a) =>
                              a.id ===
                              this.state.hardwareRequest.hardwareRequestType
                          )
                        : null
                    }
                    onChange={(event, newValue) =>
                      this.handleFieldChange(newValue.id, "hardwareRequestType")
                    }
                    renderInput={(params) => {
                      return (
                        <Grid container spacing={2} alignItems="flex-end">
                          <Grid item lg={12} md={12} sm={12} xs={12}>
                            <TextField
                              {...params}
                              required
                              id="input-with-icon-grid"
                              label="Request type"
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
                    onClick={this.addHardwareRequest}
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
                        rows={this.state.hardwareRequests}
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
  withRouter(HardwareRequestGeneral)
);
