import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { styles } from "./ManageLeaveRequestsStyles";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@material-ui/data-grid";
import { Paper, Grid, Button } from "@material-ui/core";
import { RequestStatuses } from "../../../../utils/constants";
import "../ManageRequestsStyles.css";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

class ManageLeaveRequestsGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = { leaveRequests: [] };
    this.columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "madeBy", headerName: "User", width: 215 },
      {
        field: "startDate",
        type: "date",
        headerName: "Date",
        width: 120,
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
      { field: "description", headerName: "Description", width: 200 },
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

            this.approveLeaveRequest(thisRow.id, RequestStatuses.Approve);
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

            this.approveLeaveRequest(thisRow.id, RequestStatuses.Decline);
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
    const leaveRequests = await this.props.onGetLeaveRequests();

    this.setState({ leaveRequests });
  }

  approveLeaveRequest = async (leaveRequestId, newStatus) => {
    var leaveRequest = await this.props.onApproveLeaveRequest(
      leaveRequestId,
      newStatus
    );
    var index = this.state.leaveRequests.findIndex(
      (f) => f.id === leaveRequest.id
    );
    await this.setState((prevState) => {
      let leaveRequests = [...prevState.leaveRequests];
      leaveRequests[index] = leaveRequest;
      return {
        leaveRequests,
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
              rows={this.state.leaveRequests}
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
  withRouter(ManageLeaveRequestsGeneral)
);
