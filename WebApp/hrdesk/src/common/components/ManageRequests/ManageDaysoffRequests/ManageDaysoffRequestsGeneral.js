import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { styles } from "./ManageDaysoffRequestsStyles";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@material-ui/data-grid";
import { RequestStatuses } from "../../../../utils/constants";
import { Paper, Grid, Button } from "@material-ui/core";
import "../ManageRequestsStyles.css";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

class ManageDaysoffRequestsGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = { daysoff: [] };
    this.columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "madeBy", headerName: "User", width: 230 },
      {
        field: "startDate",
        type: "date",
        headerName: "Date",
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
      { field: "description", headerName: "Description", width: 325 },
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

            this.approveDayoff(thisRow.id, RequestStatuses.Approve);
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

            this.approveDayoff(thisRow.id, RequestStatuses.Decline);
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
    const daysoff = await this.props.onGetDaysoff();

    this.setState({ daysoff });
  }

  approveDayoff = async (dayoffId, newStatus) => {
    var dayoff = await this.props.onApproveDayoff(dayoffId, newStatus);
    var index = this.state.daysoff.findIndex((f) => f.id === dayoff.id);
    await this.setState((prevState) => {
      let daysoff = [...prevState.daysoff];
      daysoff[index] = dayoff;
      return {
        daysoff,
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
              rows={this.state.daysoff}
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
  withRouter(ManageDaysoffRequestsGeneral)
);
