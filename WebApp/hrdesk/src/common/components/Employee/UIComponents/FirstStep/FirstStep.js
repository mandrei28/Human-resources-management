import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Paper, Container, CssBaseline } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

export default class FirstStep extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.info(this.props);
    debugger;
  }
  render() {
    const isValid =
      this.props.user.firstName.length > 0 &&
      this.props.user.lastName.length > 0 &&
      this.props.user.email.length > 0 &&
      this.props.user.gender.length > 0 &&
      this.props.user.phone.length > 0 &&
      this.props.user.address.length > 0 &&
      this.props.user.cnp.length > 0;
    return (
      <React.Fragment>
        <Container maxWidth="md">
          <Grid container spacing={2} noValidate>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                placeholder="Your first name"
                margin="normal"
                value={this.props.user.firstName || ""}
                onChange={(event) =>
                  this.props.handleChange(event, "firstName")
                }
                //error={!!formErrors.firstName}
                //helperText={formErrors.firstName}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                placeholder="Your last name"
                margin="normal"
                value={this.props.user.lastName || ""}
                onChange={(event) => this.props.handleChange(event, "lastName")}
                //error={!!formErrors.lastName}
                //helperText={formErrors.lastName}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                placeholder="Your email address"
                type="email"
                value={this.props.user.email || ""}
                onChange={(event) => this.props.handleChange(event, "email")}
                margin="normal"
                //error={!!formErrors.email}
                // helperText={formErrors.email}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required margin="normal">
                <InputLabel>Gender</InputLabel>
                <Select
                  value={this.props.user.gender}
                  onChange={(event) => this.props.handleChange(event, "gender")}
                  name="gender"
                >
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                placeholder="Your phone number"
                value={this.props.user.phone || ""}
                onChange={(event) => this.props.handleChange(event, "phone")}
                margin="normal"
                //error={!!formErrors.email}
                // helperText={formErrors.email}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                placeholder="Your home address"
                value={this.props.user.address || ""}
                onChange={(event) => this.props.handleChange(event, "address")}
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
                label="Date of birth"
                name="date"
                type="date"
                //defaultValue={date || "1999-12-31"}
                //onChange={handleChange}
                value={this.props.user.dateOfBirth || ""}
                onChange={(event) =>
                  this.props.handleChange(event, "dateOfBirth")
                }
                margin="normal"
                required
              /> */}
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="dateOfBirth"
                  label="Date of birth"
                  //error={this.state.dayoff.startDate === null}
                  fullWidth
                  required
                  value={this.props.user.dateOfBirth || ""}
                  onChange={(event) =>
                    this.props.handleDateChange(event, "dateOfBirth")
                  }
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />{" "}
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="CNP"
                name="cnp"
                placeholder="Your CNP"
                value={this.props.user.cnp || ""}
                onChange={(event) => this.props.handleChange(event, "cnp")}
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
              disabled={!isValid}
              color="primary"
              //onClick={isValid ? this.props.handleNext : null}
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
