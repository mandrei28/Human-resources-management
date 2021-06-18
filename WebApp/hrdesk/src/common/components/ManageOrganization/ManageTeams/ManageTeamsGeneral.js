import React, { Component } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import { styles } from "./ManageTeamsStyles";
import EditIcon from "@material-ui/icons/Edit";
import TeamDialog from "./UIElements/TeamDialog";

class ManageTeamsGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = { showTeamDialog: false, teams: [], team: null };
    this.columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "name", headerName: "Name", width: 220 },
      { field: "description", headerName: "Description", width: 600 },
      {
        field: "creationDate",
        headerName: "Creation date",
        width: 210,
        valueFormatter: (params) => params.value.split("T")[0],
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
              onClick={this.openTeamDialog}
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

            this.editTeam(thisRow);
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

            this.deleteTeam(thisRow.id);
          };

          return (
            <React.Fragment>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                <EditIcon onClick={onClick} />
              </div>
              <div
                style={{
                  paddingTop: "10px",
                  paddingLeft: "5px",
                  cursor: "pointer",
                }}
                hidden={params.row.predefined}
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
    const teams = await this.props.onGetTeams();

    this.setState({ teams });
  }

  openTeamDialog = () => {
    this.setState({ showTeamDialog: true });
  };

  closeTeamDialog = () => {
    this.setState({ showTeamDialog: false, team: null });
  };

  deleteTeam = async (teamId) => {
    await this.props.onDeleteTeam(teamId);
    this.setState({
      teams: this.state.teams.filter((team, _) => team.id !== teamId),
    });
  };

  editTeam = async (team) => {
    await this.setState({ team: team });
    this.openTeamDialog();
  };

  addOrUpdateTeam = async (team) => {
    if (this.state.team === null) {
      var newTeam = await this.props.onAddTeam(team);
      await this.setState({
        teams: [...this.state.teams, newTeam],
      });
    } else {
      await this.props.onUpdateTeam(team);
      var index = this.state.teams.findIndex((f) => f.id === team.id);

      await this.setState((prevState) => {
        let teams = [...prevState.teams];
        teams[index] = team;
        return {
          teams,
          team: null,
        };
      });
    }
    this.closeTeamDialog();
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid item xs={12} md={12} lg={12} style={{ paddingTop: "40px" }}>
          <Paper className={classes.paper}>
            <div style={{ height: 560, width: "100%" }}>
              <DataGrid
                rows={this.state.teams}
                columns={this.columns}
                pageSize={10}
                rowHeight={45}
                disableSelectionOnClick={true}
              />
            </div>
          </Paper>
        </Grid>
        {this.state.showTeamDialog && (
          <TeamDialog
            onClose={this.closeTeamDialog}
            team={this.state.team}
            onAddOrUpdate={this.addOrUpdateTeam}
          />
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  withRouter(ManageTeamsGeneral)
);
