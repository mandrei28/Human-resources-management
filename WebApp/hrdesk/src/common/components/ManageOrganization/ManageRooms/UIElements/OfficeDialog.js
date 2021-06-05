import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DateFnsUtils from "@date-io/date-fns";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { Grid } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default class OfficeDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      office: {
        name: "",
        number: null,
        location: "",
        capacity: null,
      },
    };
  }

  handleOfficeFieldChange = (event, field) => {
    this.setState((prevState) => {
      const { office } = prevState;
      office[field] = event.target.value;
      return { office };
    });
  };

  handleOfficeDateFieldChange = (value, field) => {
    this.setState((prevState) => {
      const { office } = prevState;
      office[field] = value;
      return { office };
    });
  };

  addOffice = () => {};

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
          <DialogTitle id="form-dialog-title">Create new office</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
                </DialogContentText> */}
            <TextField
              error={this.state.office.name.length === 0}
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
              value={this.state.office.name}
            />
            <TextField
              error={this.state.office.number === null}
              margin="dense"
              id="number"
              label="Number"
              type="number"
              fullWidth
              required
              onChange={(event) =>
                this.handleMeetingRoomFieldChange(event, "number")
              }
              value={this.state.office.number}
            />
            <TextField
              error={this.state.office.location.length === 0}
              margin="dense"
              id="location"
              label="Location"
              type="text"
              fullWidth
              required
              onChange={(event) =>
                this.handleMeetingRoomFieldChange(event, "location")
              }
              value={this.state.office.location}
            />
            <TextField
              error={this.state.office.capacity === null}
              margin="dense"
              id="capacity"
              label="Capacity"
              type="text"
              fullWidth
              required
              onChange={(event) =>
                this.handleMeetingRoomFieldChange(event, "capacity")
              }
              value={this.state.office.capacity}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.onClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.props.onAdd} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
