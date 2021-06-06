import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Paper, Container, CssBaseline } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

export default class SecondStep extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.info(this.props);
    debugger;
    const isValid =
      this.props.user.teamId !== 0 &&
      this.props.user.functionId !== null &&
      this.props.user.officeId !== null &&
      this.props.user.password.length > 0 &&
      this.props.user.numberOfDaysoff > 0 &&
      this.props.user.salary !== null &&
      this.props.user.workEmail.length > 0;
    return (
      <React.Fragment>
        <Container maxWidth="md">
          <Grid container spacing={2} noValidate>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required margin="normal">
                <InputLabel>Team</InputLabel>
                <Select
                  value={this.props.user.teamId || 0}
                  onChange={(event) => this.props.handleChange(event, "teamId")}
                  name="teamId"
                >
                  {this.props.teams.map((team) => (
                    <MenuItem value={team.id} key={team.id}>
                      {team.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required margin="normal">
                <InputLabel>Function</InputLabel>
                <Select
                  value={this.props.user.functionId || 0}
                  onChange={(event) =>
                    this.props.handleChange(event, "functionId")
                  }
                  name="functionId"
                >
                  {this.props.functions.map((userFunction) => (
                    <MenuItem value={userFunction.id} key={userFunction.id}>
                      {userFunction.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required margin="normal">
                <InputLabel>Office</InputLabel>
                <Select
                  value={this.props.user.officeId || 0}
                  onChange={(event) =>
                    this.props.handleChange(event, "officeId")
                  }
                  name="officeId"
                >
                  {this.props.offices.map((office) => (
                    <MenuItem value={office.id} key={office.id}>
                      {office.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                placeholder="Password"
                type="password"
                value={this.props.user.password || ""}
                onChange={(event) => this.props.handleChange(event, "password")}
                margin="normal"
                //error={!!formErrors.email}
                // helperText={formErrors.email}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Number of daysoff"
                name="numberOfDaysoff"
                placeholder="NumberOfDaysoff"
                type="number"
                value={this.props.user.numberOfDaysoff || 0}
                onChange={(event) =>
                  this.props.handleChange(event, "numberOfDaysoff")
                }
                margin="normal"
                //error={!!formErrors.email}
                // helperText={formErrors.email}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Salary"
                name="salary"
                placeholder="Salary"
                type="number"
                value={this.props.user.salary || 0}
                onChange={(event) => this.props.handleChange(event, "salary")}
                margin="normal"
                //error={!!formErrors.email}
                // helperText={formErrors.email}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <TextField
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                label="Date of employment"
                name="employmentDate"
                type="date"
                value={this.props.user.dateOfEmployment || ""}
                onChange={(event) =>
                  this.props.handleChange(event, "dateOfEmployment")
                }
                margin="normal"
                required
              /> */}{" "}
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <React.Fragment>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="dateOfEmployment"
                    label="Date of employment"
                    //error={this.state.dayoff.startDate === null}
                    fullWidth
                    required
                    value={this.props.user.dateOfEmployment || ""}
                    onChange={(event) =>
                      this.props.handleDateChange(event, "dateOfEmployment")
                    }
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />{" "}
                </React.Fragment>
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Work email"
                name="workEmail"
                placeholder="Your work email"
                value={this.props.user.workEmail || ""}
                onChange={(event) =>
                  this.props.handleChange(event, "workEmail")
                }
                margin="normal"
                //error={!!formErrors.email}
                // helperText={formErrors.email}
                required
              />
            </Grid>
          </Grid>
          <div
            style={{
              display: "flex",
              marginTop: 50,
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="contained"
              color="default"
              onClick={this.props.handleBack}
              style={{ marginRight: 10 }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              disabled={!isValid}
              color="primary"
              //onClick={isValid ? handleNext : null}
              onClick={this.props.handleNext}
            >
              Next
            </Button>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
