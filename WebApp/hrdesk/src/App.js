import "./App.css";
import LoginContainer from "./common/components/Login/LoginContainer";
import HomeGeneral from "./common/components/Home/HomeGeneral";
import DaysoffGeneral from "./common/components/Daysoff/DaysoffGeneral";
import NavBar from "./common/navigation/NavBar";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./services/PrivateRoute";
import * as userActions from "./redux/actions/userActions";
import { isTokenValid } from "./services/authService";
import { makeStyles } from "@material-ui/core/styles";
import LeaveRequestGeneral from "./common/components/LeaveRequest/LeaveRequestGeneral";
import TeamGeneral from "./common/components/Team/TeamGeneral";
import BookGeneral from "./common/components/Book/BookGeneral";
import ReduxToastr from "react-redux-toastr";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import React from "react";
import EmployeesGeneral from "./common/components/Employees/EmployeesGeneral";
import EmployeeGeneral from "./common/components/Employee/EmployeeGeneral";
const styles = (theme) => ({
  root: {
    display: "flex",
    height: "100vh",
  },
});
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: isTokenValid() };
  }
  componentDidMount() {
    if (this.state.isLoggedIn) {
      this.props.onSilentLogin();
    }
  }
  logout = () => {
    this.setState({ isLoggedIn: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {this.state.isLoggedIn && <NavBar logout={this.logout} />}
        <Route path="/login" component={LoginContainer} exact={true} />
        <PrivateRoute
          exact
          path="/"
          component={HomeGeneral}
          isLoggedIn={this.state.isLoggedIn}
        />
        <PrivateRoute
          exact
          path="/daysoff"
          component={DaysoffGeneral}
          isLoggedIn={this.state.isLoggedIn}
        />
        <PrivateRoute
          exact
          path="/leaverequest"
          component={LeaveRequestGeneral}
          isLoggedIn={this.state.isLoggedIn}
        />
        <PrivateRoute
          exact
          path="/team"
          component={TeamGeneral}
          isLoggedIn={this.state.isLoggedIn}
        />
        <PrivateRoute
          exact
          path="/employees"
          component={EmployeesGeneral}
          isLoggedIn={this.state.isLoggedIn}
        />
        <PrivateRoute
          exact
          path="/book"
          component={BookGeneral}
          isLoggedIn={this.state.isLoggedIn}
        />
        <PrivateRoute
          exact
          path="/employees/:id"
          component={EmployeeGeneral}
          isLoggedIn={this.state.isLoggedIn}
        />{" "}
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="bottom-right"
          getState={(state) => state.toastr}
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

const mergeProps = (stateProps, dispatchProps) => {
  const { dispatch } = dispatchProps;
  return {
    ...stateProps,
    ...dispatchProps,
    onSilentLogin: () => {
      dispatch(userActions.silentLogin());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(withStyles(styles, { withTheme: true })(withRouter(App)));
