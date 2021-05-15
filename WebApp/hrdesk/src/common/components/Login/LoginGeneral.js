import React from "react";
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import logo from "../../../media/logo.png";
import { styles } from "./LoginStyles";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

class LoginGeneral extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { email: "", password: "", rememberMe: false },
    };
  }

  static propTypes = {
    onLogin: PropTypes.func,
    classes: PropTypes.object.isRequired,
  };

  copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        {"HRDesk "}
        {new Date().getFullYear()}
      </Typography>
    );
  };
  handleFieldChange = async (event, field) => {
    await this.setState((prevState) => {
      const { user } = prevState;
      user[field] = event.target.value;
      return { user };
    });
  };
  handleCheckBoxChange = async (event, field) => {
    await this.setState((prevState) => {
      const { user } = prevState;
      user[field] = event.target.checked;
      return { user };
    });
  };
  login = () => {
    this.props.onLogin(this.state.user);
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <img src={logo} alt="logo" width="200px" height="200px"></img>
            <Box mt={7}>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
            </Box>
            <form className={classes.form}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={this.state.user.email}
                onChange={(event) => this.handleFieldChange(event, "email")}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={this.state.user.password}
                onChange={(event) => this.handleFieldChange(event, "password")}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value={this.state.user.rememberMe}
                    onChange={(event) =>
                      this.handleCheckBoxChange(event, "rememberMe")
                    }
                    color="primary"
                  />
                }
                label="Remember me"
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.login}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </form>
            <Box className={classes.copyright}>{this.copyright()}</Box>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  withRouter(LoginGeneral)
);
