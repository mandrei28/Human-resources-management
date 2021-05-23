import React, { Component } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { withRouter } from "react-router-dom";
import employee from "../../../../media/employee.jpg";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import {
  Paper,
  Grid,
  Container,
  CssBaseline,
  withStyles,
} from "@material-ui/core";

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
    debugger;
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
          {/* <DialogTitle id="max-width-dialog-title">
            {this.props.user.name}
          </DialogTitle> */}
          <DialogContent>
            <Grid container spacing={2}>
              <Grid container item lg={12} justify="center">
                <Avatar
                  alt="Remy Sharp"
                  src={employee}
                  className={classes.large}
                />
              </Grid>
              <Grid container item lg={6} justify="center">
                <Grid container item lg={12} justify="center">
                  <Avatar
                    alt="Remy Sharp"
                    src={employee}
                    className={classes.large}
                  />
                </Grid>
                <Grid container item lg={12} justify="center">
                  <Avatar
                    alt="Remy Sharp"
                    src={employee}
                    className={classes.large}
                  />
                </Grid>
              </Grid>
              <Grid container item lg={6} justify="center">
                <Avatar
                  alt="Remy Sharp"
                  src={employee}
                  className={classes.large}
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
