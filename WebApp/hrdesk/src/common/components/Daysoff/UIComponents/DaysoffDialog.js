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

export default class DaysoffDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayoff: {
        description: "",
        startDate: new Date(),
        endDate: new Date(),
        adminModel: null,
      },
    };
  }

  handleDayoffFieldChange = (event, field) => {
    this.setState((prevState) => {
      const { dayoff } = prevState;
      dayoff[field] = event.target.value;
      return { dayoff };
    });
  };

  handleDayoffPersonFieldChange = (value, field) => {
    this.setState((prevState) => {
      const { dayoff } = prevState;
      dayoff[field] = value;
      return { dayoff };
    });
  };

  handleDayoffDateFieldChange = (value, field) => {
    this.setState((prevState) => {
      const { dayoff } = prevState;
      dayoff[field] = value;
      return { dayoff };
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
          <DialogTitle id="form-dialog-title">Create new daysoff</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
            </DialogContentText> */}
            <TextField
              error={this.state.dayoff.description.length === 0}
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
              required
              onChange={(event) =>
                this.handleDayoffFieldChange(event, "description")
              }
              value={this.state.dayoff.description}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="startDate"
                label="Start date"
                error={this.state.dayoff.startDate === null}
                fullWidth
                required
                value={this.state.dayoff.startDate}
                onChange={(event) =>
                  this.handleDayoffDateFieldChange(event, "startDate")
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
                error={this.state.dayoff.endDate === null}
                fullWidth
                required
                value={this.state.dayoff.endDate}
                onChange={(event) =>
                  this.handleDayoffDateFieldChange(event, "endDate")
                }
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
            <Autocomplete
              id="combo-box-demo"
              options={this.props.admins}
              getOptionLabel={(option) =>
                option.firstName + " " + option.lastName
              }
              fullWidth
              value={this.state.dayoff.adminModel}
              onChange={(event, newValue) =>
                this.handleDayoffPersonFieldChange(newValue, "adminModel")
              }
              renderInput={(params) => {
                return (
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item lg={1} md={1} xs={1}>
                      <AccountCircle />
                    </Grid>
                    <Grid item lg={11} md={11} xs={11}>
                      <TextField
                        {...params}
                        error={params.inputProps.value === ""}
                        id="input-with-icon-grid"
                        label="Spoke with"
                        fullWidth
                        maxWidth="xs"
                      />
                    </Grid>
                  </Grid>
                );
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.onClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => this.props.onAdd(this.state.dayoff)}
              color="primary"
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
