import React, { Component } from "react";
import { DataGrid, GridApi } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid, Container, CssBaseline } from "@material-ui/core";
import { styles } from "./EmployeesStyles";
import EditIcon from "@material-ui/icons/Edit";

class EmployeesGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "description", headerName: "Description", width: 250 },
      {
        field: "startDate",
        type: "date",
        headerName: "Start date",
        width: 210,
      },
      { field: "endDate", type: "date", headerName: "End date", width: 210 },
      { field: "status", headerName: "Status", width: 150 },
      { field: "verified", headerName: "Verified By", width: 200 },
      {
        field: "",
        width: 100,
        disableColumnMenu: true,
        sortable: false,
        align: "center",
        headerClassName: "custom-grid-header",
        renderHeader: (params) => {
          return (
            <Button
              disabled={this.state.disabled}
              variant="contained"
              color="primary"
              onClick={this.createNewUser}
            >
              NEW
            </Button>
          );
        },
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
          const onDelete = () => {
            const api = params.api;
            const fields = api
              .getAllColumns()
              .map((c) => c.field)
              .filter((c) => c !== "__check__" && !!c);
            const thisRow = {};

            fields.forEach((f) => {
              thisRow[f] = params.getValue(f);
            });
            debugger;
            return console.info(JSON.stringify(thisRow, null, 4));
          };

          return (
            <React.Fragment>
              <div
                hidden={params.row.id === 1}
                style={{ paddingTop: "10px", cursor: "pointer" }}
              >
                <EditIcon onClick={onClick} />
              </div>
              <div
                hidden={params.row.id === 1}
                style={{
                  paddingTop: "10px",
                  paddingLeft: "5px",
                  cursor: "pointer",
                }}
              >
                <DeleteIcon onClick={onDelete} />
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
        startDate: new Date(),
        endDate: new Date(),
        status: "Approved",
        verified: null,
      },
      {
        id: 2,
        description: "Lannister",
        startDate: new Date(),
        endDate: new Date(),
        status: "Approved",
        verified: null,
      },
      {
        id: 3,
        description: "Lannister",
        startDate: new Date(),
        endDate: new Date(),
        status: "Approved",
        verified: null,
      },
      {
        id: 4,
        description: "Stark",
        startDate: new Date(),
        endDate: new Date(),
        status: null,
        verified: null,
      },
      {
        id: 5,
        description: "Targaryen",
        startDate: new Date(),
        endDate: new Date(),
        status: "Approved",
        verified: null,
      },
      {
        id: 6,
        description: "Melisandre",
        startDate: new Date(),
        endDate: new Date(),
        status: "Approved",
        verified: "Admin",
      },
      {
        id: 7,
        description: "Clifford",
        startDate: new Date(),
        endDate: new Date(),
        status: "Approved",
        verified: null,
      },
      {
        id: 8,
        description: "Frances",
        startDate: new Date(),
        endDate: new Date(),
        status: "Approved",
        verified: null,
      },
      {
        id: 9,
        description: "Roxie",
        startDate: new Date(),
        endDate: new Date(),
        status: "Approved",
        verified: null,
      },
      {
        id: 10,
        description: "Roxie",
        startDate: new Date(),
        endDate: new Date(),
        status: "Approved",
        verified: null,
      },
      {
        id: 11,
        description: "Roxie",
        startDate: new Date(),
        endDate: new Date(),
        status: "Approved",
        verified: null,
      },
      {
        id: 12,
        description: "Roxie",
        startDate: new Date(),
        endDate: new Date(),
        status: "Approved",
        verified: null,
      },
      {
        id: 13,
        description: "Roxie",
        startDate: new Date(),
        endDate: new Date(),
        status: "Approved",
        verified: null,
      },
      {
        id: 14,
        description: "Roxie",
        startDate: new Date(),
        endDate: new Date(),
        status: "Approved",
        verified: null,
      },
      {
        id: 15,
        description: "Roxie",
        startDate: new Date(),
        endDate: new Date(),
        status: "Approved",
        verified: null,
      },
    ];
  }

  createNewUser = () => {
    this.props.history.push("/employees/new");
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12}>
                <Paper className={classes.paper}>
                  <div style={{ height: 760, width: "100%" }}>
                    <DataGrid
                      rows={this.rows}
                      columns={this.columns}
                      pageSize={15}
                      rowHeight={43}
                      disableSelectionOnClick={true}
                    />
                  </div>
                </Paper>
              </Grid>
            </Grid>{" "}
          </Container>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  withRouter(EmployeesGeneral)
);
