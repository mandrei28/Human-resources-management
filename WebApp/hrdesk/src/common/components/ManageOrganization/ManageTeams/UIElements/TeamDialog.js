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

export default class TeamDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: {
        name: "",
        description: "",
      },
    };
  }

  handleTeamFieldChange = (event, field) => {
    this.setState((prevState) => {
      const { team } = prevState;
      team[field] = event.target.value;
      return { team };
    });
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
          <DialogTitle id="form-dialog-title">Create new team</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
                </DialogContentText> */}
            <TextField
              error={this.state.team.description.length === 0}
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
              required
              onChange={(event) =>
                this.handleTeamFieldChange(event, "description")
              }
              value={this.state.team.description}
            />
            <TextField
              error={this.state.team.name.length === 0}
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              required
              onChange={(event) => this.handleTeamFieldChange(event, "name")}
              value={this.state.team.name}
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
