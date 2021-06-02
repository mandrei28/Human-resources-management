import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { styles } from "./ManageDaysoffRequestsStyles";
import { DataGrid } from "@material-ui/data-grid";
import { Paper, Grid, Container, CssBaseline, Button } from "@material-ui/core";
import "../ManageRequestsStyles.css";

class ManageDaysoffRequestsGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "description", headerName: "Description", width: 200 },
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
      { field: "status", headerName: "Status", width: 120 },
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
            <React.Fragment>
              <div hidden={params.row.id === 1}>
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

            return alert(JSON.stringify(thisRow, null, 4));
          };

          return (
            <React.Fragment>
              <div hidden={params.row.id === 1}>
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
      <Grid item xs={12} md={12} lg={12} style={{ paddingTop: "40px" }}>
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
    );
  }
}
export default withStyles(styles, { withTheme: true })(
  withRouter(ManageDaysoffRequestsGeneral)
);
