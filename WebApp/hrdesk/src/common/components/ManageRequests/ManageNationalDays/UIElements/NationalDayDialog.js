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

export default class NationalDayDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nationalDay: {
        description: "",
        startDate: null,
        endDate: null,
      },
    };
  }

  handleNationalDayFieldChange = (event, field) => {
    this.setState((prevState) => {
      const { nationalDay } = prevState;
      nationalDay[field] = event.target.value;
      return { nationalDay };
    });
  };

  handleNationalDayDateFieldChange = (value, field) => {
    this.setState((prevState) => {
      const { nationalDay } = prevState;
      nationalDay[field] = value;
      return { nationalDay };
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
          <DialogTitle id="form-dialog-title">
            Create new national dayoff
          </DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
                </DialogContentText> */}
            <TextField
              error={this.state.nationalDay.description.length === 0}
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
              required
              onChange={(event) =>
                this.handleNationalDayFieldChange(event, "description")
              }
              value={this.state.nationalDay.description}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="startDate"
                label="Start date"
                error={this.state.nationalDay.startDate === null}
                fullWidth
                required
                value={this.state.nationalDay.startDate}
                onChange={(event) =>
                  this.handleNationalDayDateFieldChange(event, "startDate")
                }
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="endDate"
                label="End date"
                error={this.state.nationalDay.endDate === null}
                fullWidth
                required
                value={this.state.nationalDay.endDate}
                onChange={(event) =>
                  this.handleNationalDayDateFieldChange(event, "endDate")
                }
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
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
