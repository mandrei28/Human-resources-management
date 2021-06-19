import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class MeetingRoomDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetingRoom: {
        id: 0,
        name: "",
        number: 0,
        location: "",
        capacity: 0,
      },
    };
  }

  async componentDidMount() {
    if (this.props.meetingRoom) {
      await this.setState({ meetingRoom: this.props.meetingRoom });
    }
  }

  handleMeetingRoomFieldChange = (event, field) => {
    this.setState((prevState) => {
      const { meetingRoom } = prevState;
      meetingRoom[field] = event.target.value;
      return { meetingRoom };
    });
  };

  addOrUpdateMeetingRoom = async () => {
    await this.props.onAddOrUpdate(this.state.meetingRoom);
  };

  render() {
    return (
      <div>
        <Dialog
          open
          onClose={this.props.onClose}
          aria-labelledby="form-dialog-title"
          fullWidth
          maxWidth="xs"
        >
          <DialogTitle id="form-dialog-title">
            {this.props.meetingRoom !== null
              ? "Update meeting room"
              : "Create new meeting room"}
          </DialogTitle>
          <DialogContent>
            <TextField
              error={this.state.meetingRoom.name.length === 0}
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              required
              onChange={(event) =>
                this.handleMeetingRoomFieldChange(event, "name")
              }
              value={this.state.meetingRoom.name}
            />
            <TextField
              error={this.state.meetingRoom.number === null}
              margin="dense"
              id="number"
              label="Number"
              type="number"
              fullWidth
              required
              onChange={(event) =>
                this.handleMeetingRoomFieldChange(event, "number")
              }
              value={this.state.meetingRoom.number}
            />
            <TextField
              error={this.state.meetingRoom.location.length === 0}
              margin="dense"
              id="location"
              label="Location"
              type="text"
              fullWidth
              required
              onChange={(event) =>
                this.handleMeetingRoomFieldChange(event, "location")
              }
              value={this.state.meetingRoom.location}
            />
            <TextField
              error={this.state.meetingRoom.capacity === null}
              margin="dense"
              id="capacity"
              label="Capacity"
              type="text"
              fullWidth
              required
              onChange={(event) =>
                this.handleMeetingRoomFieldChange(event, "capacity")
              }
              value={this.state.meetingRoom.capacity}
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={this.props.onClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.addOrUpdateMeetingRoom} color="primary">
              {this.props.meetingRoom !== null ? "Update" : "Add"}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
