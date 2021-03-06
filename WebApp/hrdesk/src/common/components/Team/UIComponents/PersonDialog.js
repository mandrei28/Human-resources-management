import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { withRouter } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import defaultuser from "../../../../media/defaultuser.jpg";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { Grid, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  large: {
    width: theme.spacing(23),
    height: theme.spacing(23),
  },
});

class PersonDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.info(this.props);
  }
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Dialog
          fullWidth
          maxWidth="sm"
          onClose={this.props.closeDialog}
          aria-labelledby="max-width-dialog-title"
          open
        >
          <DialogContent style={{ height: "540px" }}>
            <Grid container spacing={3}>
              <Grid container item lg={12} justify="center">
                <Avatar
                  alt={this.props.user.firstName}
                  src={
                    this.props.user.imageSrc !== null
                      ? this.props.user.imageSrc
                      : defaultuser
                  }
                  className={classes.large}
                />
              </Grid>
              <Grid container item lg={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Name"
                  value={
                    this.props.user.lastName + " " + this.props.user.firstName
                  }
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid container item lg={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Function"
                  value={this.props.user.functionName}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid container item lg={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Room"
                  value={this.props.user.officeName}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid container item lg={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Birth Date"
                  value={
                    this.props.user.dateOfBirth.toLocaleString().split("T")[0]
                  }
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid container item lg={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Since"
                  value={
                    this.props.user.dateOfEmployment
                      .toLocaleString()
                      .split("T")[0]
                  }
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid container item lg={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Email"
                  value={this.props.user.workEmail}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid container item lg={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Phone number"
                  value={this.props.user.phone}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid container item lg={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Team"
                  value={this.props.user.teamName}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.closeDialog} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  withRouter(PersonDialog)
);
