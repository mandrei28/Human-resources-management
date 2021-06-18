import React, { Component } from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import { styles } from "./ManageNationalDaysStyles";
import EditIcon from "@material-ui/icons/Edit";
import NationalDayDialog from "./UIElements/NationalDayDialog";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

class ManageNationalDaysGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNationalDayDialog: false,
      nationalDays: [],
      nationalDay: null,
    };
    this.columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "description", headerName: "Description", width: 450 },
      {
        field: "startDate",
        type: "date",
        headerName: "Start date",
        width: 220,
        valueFormatter: (params) => params.value.split("T")[0],
      },
      {
        field: "endDate",
        type: "date",
        headerName: "End date",
        width: 220,
        valueFormatter: (params) => params.value.split("T")[0],
      },
      {
        field: "creationDate",
        headerName: "CreationDate",
        width: 150,
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
              // disabled={this.state.disabled}
              variant="contained"
              color="primary"
              onClick={this.openNationalDayDialog}
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

            this.editNationalDay(thisRow);
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

            this.deleteNationalDay(thisRow.id);
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
    const nationalDays = await this.props.onGetNationalDays();

    this.setState({ nationalDays });
  }

  openNationalDayDialog = () => {
    this.setState({ showNationalDayDialog: true });
  };

  closeNationalDayDialog = () => {
    this.setState({ showNationalDayDialog: false, nationalDay: null });
  };

  deleteNationalDay = async (nationalDayId) => {
    await this.props.onDeleteNationalDay(nationalDayId);
    this.setState({
      nationalDays: this.state.nationalDays.filter(
        (nationalDay, _) => nationalDay.id !== nationalDayId
      ),
    });
  };

  editNationalDay = async (nationalDay) => {
    await this.setState({ nationalDay: nationalDay });
    this.openNationalDayDialog();
  };

  addOrUpdateNationalDay = async (nationalDay) => {
    if (this.state.nationalDay === null) {
      var newNationalDay = await this.props.onAddNationalDay(nationalDay);
      await this.setState({
        nationalDays: [...this.state.nationalDays, newNationalDay],
      });
    } else {
      var updatedNationalDay = await this.props.onUpdateNationalDay(
        nationalDay
      );

      var index = this.state.nationalDays.findIndex(
        (f) => f.id === nationalDay.id
      );

      await this.setState((prevState) => {
        let nationalDays = [...prevState.nationalDays];
        nationalDays[index] = updatedNationalDay;
        return {
          nationalDays,
          nationalDay: null,
        };
      });
    }
    this.closeNationalDayDialog();
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid item xs={12} md={12} lg={12} style={{ paddingTop: "40px" }}>
          <Paper className={classes.paper}>
            <div style={{ height: 560, width: "100%" }}>
              <DataGrid
                rows={this.state.nationalDays}
                columns={this.columns}
                pageSize={10}
                rowHeight={45}
                disableSelectionOnClick={true}
                components={{
                  Toolbar: CustomToolbar,
                }}
              />
            </div>
          </Paper>
        </Grid>
        {this.state.showNationalDayDialog && (
          <NationalDayDialog
            onClose={this.closeNationalDayDialog}
            nationalDay={this.state.nationalDay}
            onAddOrUpdate={this.addOrUpdateNationalDay}
          />
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  withRouter(ManageNationalDaysGeneral)
);
