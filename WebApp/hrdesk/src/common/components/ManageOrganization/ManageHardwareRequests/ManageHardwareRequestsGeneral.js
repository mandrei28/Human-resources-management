import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { styles } from "./ManageHardwareRequestsStyles";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@material-ui/data-grid";
import { Paper, Grid, Button } from "@material-ui/core";
import {
  RequestStatuses,
  HardwareRequestTypes,
} from "../../../../utils/constants";
import "../ManageOrganizationStyles.css";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

class ManageHardwareRequestsGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = { hardwareRequests: [] };
    this.columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "madeBy", headerName: "User", width: 215 },
      {
        field: "startDate",
        type: "date",
        headerName: "Start date",
        width: 120,
        valueFormatter: (params) => params.value.split("T")[0],
      },
      {
        field: "endDate",
        type: "string",
        headerName: "End date",
        width: 140,
        valueFormatter: (params) => params.value.split("T")[0],
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
      { field: "description", headerName: "Description", width: 200 },
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

            this.approveHardwareRequest(thisRow.id, RequestStatuses.Approve);
          };

          return (
            <React.Fragment>
              <div hidden={params.row.status === 2}>
                <Button
                  variant="contained"
                  className="approveButton"
                  onClick={onClick}
                >
                  Accept
                </Button>
              </div>
            </React.Fragment>
          );
        },
      },
      {
        field: " ",
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

            this.approveHardwareRequest(thisRow.id, RequestStatuses.Decline);
          };

          return (
            <React.Fragment>
              <div hidden={params.row.status === 1}>
                <Button
                  variant="contained"
                  className="declineButton"
                  onClick={onClick}
                >
                  Decline
                </Button>
              </div>
            </React.Fragment>
          );
        },
      },
    ];
  }

  async componentDidMount() {
    const hardwareRequests = await this.props.onGetHardwareRequests();

    this.setState({ hardwareRequests });
  }

  approveHardwareRequest = async (hardwareRequestId, newStatus) => {
    var hardwareRequest = await this.props.onApproveHardwareRequest(
      hardwareRequestId,
      newStatus
    );
    var index = this.state.hardwareRequests.findIndex(
      (f) => f.id === hardwareRequest.id
    );
    await this.setState((prevState) => {
      let hardwareRequests = [...prevState.hardwareRequests];
      hardwareRequests[index] = hardwareRequest;
      return {
        hardwareRequests,
      };
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid item xs={12} md={12} lg={12} style={{ paddingTop: "40px" }}>
        <Paper className={classes.paper}>
          <div style={{ height: 560, width: "100%" }}>
            <DataGrid
              rows={this.state.hardwareRequests}
              columns={this.columns}
              pageSize={9}
              rowHeight={45}
              disableSelectionOnClick={true}
              components={{
                Toolbar: CustomToolbar,
              }}
            />
          </div>
        </Paper>
      </Grid>
    );
  }
}
export default withStyles(styles, { withTheme: true })(
  withRouter(ManageHardwareRequestsGeneral)
);
