import React, { Component } from "react";
import {
  DataGrid,
  GridApi,
  GridToolbarContainer,
  GridToolbarExport,
} from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid, Container, CssBaseline } from "@material-ui/core";
import { styles } from "./EmployeesStyles";
import EditIcon from "@material-ui/icons/Edit";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

class EmployeesGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = { setupComplete: false, users: [] };
    this.columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "firstName", headerName: "First Name", flex: 1 },
      {
        field: "lastName",
        headerName: "Last name",
        flex: 0.7,
      },
      { field: "workEmail", headerName: "Work email", width: 240 },
      {
        field: "teamName",
        headerName: "Team",
        width: 180,
      },
      {
        field: "officeName",
        headerName: "Office",
        width: 180,
      },
      {
        field: "functionName",
        headerName: "Function",
        width: 200,
      },
      {
        field: "salary",
        headerName: "Salary",
        flex: 0.5,
      },
      {
        field: "phone",
        headerName: "Phone",
        flex: 0.7,
      },
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
            this.props.history.push(`/employees/${thisRow.id}`);
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
            this.deleteUser(thisRow.id);
          };

          return (
            <React.Fragment>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                <EditIcon onClick={onClick} />
              </div>
              <div
                hidden={params.row.predefined}
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
  }

  async componentDidMount() {
    var users = await this.props.onGetUsers();
    this.setState({ users, setupComplete: true });
    console.info(users);
    debugger;
  }

  createNewUser = () => {
    this.props.history.push("/employees/new");
  };

  deleteUser = async (userId) => {
    this.props.onDeleteUser(userId);
    this.setState({
      users: this.state.users.filter((user, _) => user.id !== userId),
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {this.state.setupComplete && (
          <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Container maxWidth="xl" className={classes.container}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={12} lg={12}>
                    <Paper className={classes.paper}>
                      <div style={{ height: 760, width: "100%" }}>
                        <DataGrid
                          rows={this.state.users}
                          columns={this.columns}
                          pageSize={15}
                          rowHeight={43}
                          disableSelectionOnClick={true}
                          components={{
                            Toolbar: CustomToolbar,
                          }}
                        />
                      </div>
                    </Paper>
                  </Grid>
                </Grid>{" "}
              </Container>
            </main>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  withRouter(EmployeesGeneral)
);
