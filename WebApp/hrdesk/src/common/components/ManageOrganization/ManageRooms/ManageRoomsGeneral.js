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
import { styles } from "./ManageRoomsStyles";
import EditIcon from "@material-ui/icons/Edit";
import MeetingRoomDialog from "./UIElements/MeetingRoomDialog";
import OfficeDialog from "./UIElements/OfficeDialog";

class ManageRoomsGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMeetingRoomDialog: false,
      showOfficeDialog: false,
      offices: [],
      meetingRooms: [],
      office: null,
      meetingRoom: null,
    };
    this.officeColumns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "name", headerName: "Office Name", width: 250 },
      {
        field: "capacity",
        headerName: "Capacity",
        width: 210,
      },
      { field: "location", headerName: "Location", width: 210 },
      { field: "number", headerName: "Number", width: 150 },
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
              onClick={this.openOfficeDialog}
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

            this.editOffice(thisRow);
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

            this.deleteOffice(thisRow.id);
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

    this.meetingRoomColumns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "name", headerName: "Meeting Room Name", width: 250 },
      {
        field: "capacity",
        headerName: "Capacity",
        width: 210,
      },
      { field: "location", headerName: "Location", width: 210 },
      { field: "number", headerName: "Number", width: 150 },
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
              onClick={this.openMeetingRoomDialog}
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

            this.editMeetingRoom(thisRow);
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

            this.deleteMeetingRoom(thisRow.id);
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
    const offices = await this.props.onGetOffices();
    const meetingRooms = await this.props.onGetMeetingRooms();
    debugger;
    this.setState({ offices, meetingRooms });
    debugger;
  }

  openMeetingRoomDialog = () => {
    this.setState({ showMeetingRoomDialog: true });
  };

  closeMeetingRoomDialog = () => {
    this.setState({ showMeetingRoomDialog: false, meetingRoom: null });
  };

  deleteMeetingRoom = async (meetingRoomId) => {
    await this.props.onDeleteMeetingRoom(meetingRoomId);
    this.setState({
      meetingRooms: this.state.meetingRooms.filter(
        (meetingRoom, _) => meetingRoom.id !== meetingRoomId
      ),
    });
  };

  editMeetingRoom = async (meetingRoom) => {
    debugger;
    await this.setState({ meetingRoom: meetingRoom });
    this.openMeetingRoomDialog();
  };

  addOrUpdateMeetingRoom = async (meetingRoom) => {
    if (this.state.meetingRoom === null) {
      var newMeetingRoom = await this.props.onAddMeetingRoom(meetingRoom);
      await this.setState({
        meetingRooms: [...this.state.meetingRooms, newMeetingRoom],
      });
    } else {
      await this.props.onUpdateMeetingRoom(meetingRoom);
      var index = this.state.meetingRooms.findIndex(
        (f) => f.id === meetingRoom.id
      );
      debugger;
      await this.setState((prevState) => {
        let meetingRooms = [...prevState.meetingRooms];
        meetingRooms[index] = meetingRoom;
        return {
          meetingRooms,
          meetingRoom: null,
        };
      });
    }
    this.closeMeetingRoomDialog();
  };

  openOfficeDialog = () => {
    this.setState({ showOfficeDialog: true });
  };

  closeOfficeDialog = () => {
    this.setState({ showOfficeDialog: false, office: null });
  };

  deleteOffice = async (officeId) => {
    await this.props.onDeleteOffice(officeId);
    this.setState({
      offices: this.state.offices.filter((office, _) => office.id !== officeId),
    });
  };

  editOffice = async (office) => {
    debugger;
    await this.setState({ office: office });
    this.openOfficeDialog();
  };

  addOrUpdateOffice = async (office) => {
    if (this.state.office === null) {
      var newOffice = await this.props.onAddOffice(office);
      await this.setState({
        offices: [...this.state.offices, newOffice],
      });
    } else {
      await this.props.onUpdateOffice(office);
      var index = this.state.offices.findIndex((f) => f.id === office.id);
      debugger;
      await this.setState((prevState) => {
        let offices = [...prevState.offices];
        offices[index] = office;
        return {
          offices,
          office: null,
        };
      });
    }
    this.closeOfficeDialog();
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid item xs={12} md={12} lg={12} style={{ paddingTop: "10px" }}>
          <Paper className={classes.paper}>
            <div style={{ height: 355, width: "100%" }}>
              <DataGrid
                rows={this.state.meetingRooms}
                columns={this.meetingRoomColumns}
                pageSize={7}
                rowHeight={35}
                disableSelectionOnClick={true}
              />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12} style={{ paddingTop: "30px" }}>
          <Paper className={classes.paper}>
            <div style={{ height: 355, width: "100%" }}>
              <DataGrid
                rows={this.state.offices}
                columns={this.officeColumns}
                pageSize={7}
                rowHeight={35}
                disableSelectionOnClick={true}
              />
            </div>
          </Paper>
        </Grid>
        {this.state.showMeetingRoomDialog && (
          <MeetingRoomDialog
            onClose={this.closeMeetingRoomDialog}
            meetingRoom={this.state.meetingRoom}
            onAddOrUpdate={this.addOrUpdateMeetingRoom}
          />
        )}
        {this.state.showOfficeDialog && (
          <OfficeDialog
            onClose={this.closeOfficeDialog}
            office={this.state.office}
            onAddOrUpdate={this.addOrUpdateOffice}
          />
        )}
      </React.Fragment>
    );
  }
}
export default withStyles(styles, { withTheme: true })(
  withRouter(ManageRoomsGeneral)
);
