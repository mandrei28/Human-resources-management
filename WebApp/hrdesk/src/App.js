import "./App.css";
import LoginContainer from "./common/components/Login/LoginContainer";
import HomeGeneral from "./common/components/Home/HomeGeneral";
import DaysoffGeneral from "./common/components/Daysoff/DaysoffGeneral";
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
import ManageRequestsGeneral from "./common/components/ManageRequests/ManageRequestsGeneral";
import MeetingsGeneral from "./common/components/Meetings/MeetingsGeneral";
import ReportsGeneral from "./common/components/Reports/ReportsGeneral";
import HolidayCalendarGeneral from "./common/components/HolidayCalendar/HolidayCalendarGeneral";
import ManageOrganizationGeneral from "./common/components/ManageOrganization/ManageOrganizationGeneral";
import EmployeeContainer from "./common/components/Employee/EmployeeContainer";
import NavBarContainer from "./common/navigation/NavBarContainer";
import { userHasPermission } from "./services/authService";
import { Permissions } from "./utils/constants";
import AccessDeniedGeneral from "./common/components/AccessDenied/AccessDeniedGeneral";
import EmployeesContainer from "./common/components/Employees/EmployeesContainer";

const styles = (theme) => ({
  root: {
    display: "flex",
    height: "100vh",
  },
});
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: isTokenValid(),
      setupComplete: false,
      user: {
        permissions: [],
      },
    };
  }
  async componentDidMount() {
    if (this.state.isLoggedIn) {
      await this.props.onSilentLogin();
    } else {
      this.setState({ setupComplete: true });
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.user !== undefined) {
      return { setupComplete: true, user: nextProps.user };
    }
    return null;
  }

  logout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {this.state.setupComplete && (
          <div className={classes.root}>
            {this.state.isLoggedIn && <NavBarContainer logout={this.logout} />}
            <Route path="/login" component={LoginContainer} exact={true} />
            <Route
              path="/accessdenied"
              component={AccessDeniedGeneral}
              exact={true}
            />
            <PrivateRoute
              exact
              path="/"
              component={HomeGeneral}
              isLoggedIn={this.state.isLoggedIn}
              hasPermission={userHasPermission(
                this.state.user.permissions,
                Permissions.Dashboard
              )}
            />
            <PrivateRoute
              exact
              path="/daysoff"
              component={DaysoffGeneral}
              isLoggedIn={this.state.isLoggedIn}
              hasPermission={userHasPermission(
                this.state.user.permissions,
                Permissions.DaysoffRequests
              )}
            />
            <PrivateRoute
              exact
              path="/leaverequest"
              component={LeaveRequestGeneral}
              isLoggedIn={this.state.isLoggedIn}
              hasPermission={userHasPermission(
                this.state.user.permissions,
                Permissions.LeaveRequests
              )}
            />
            <PrivateRoute
              exact
              path="/team"
              component={TeamGeneral}
              isLoggedIn={this.state.isLoggedIn}
              hasPermission={userHasPermission(
                this.state.user.permissions,
                Permissions.Team
              )}
            />
            <PrivateRoute
              exact
              path="/employees"
              component={EmployeesContainer}
              isLoggedIn={this.state.isLoggedIn}
              hasPermission={userHasPermission(
                this.state.user.permissions,
                Permissions.ManageEmployees
              )}
            />
            <PrivateRoute
              exact
              path="/book"
              component={BookGeneral}
              isLoggedIn={this.state.isLoggedIn}
              hasPermission={userHasPermission(
                this.state.user.permissions,
                Permissions.BookRoom
              )}
            />
            <PrivateRoute
              exact
              path="/employees/:id"
              component={EmployeeContainer}
              isLoggedIn={this.state.isLoggedIn}
              hasPermission={userHasPermission(
                this.state.user.permissions,
                Permissions.ManageEmployees
              )}
            />
            <PrivateRoute
              exact
              path="/holidays"
              component={ManageRequestsGeneral}
              isLoggedIn={this.state.isLoggedIn}
              hasPermission={userHasPermission(
                this.state.user.permissions,
                Permissions.ManageHolidays
              )}
            />
            <PrivateRoute
              exact
              path="/meetings"
              component={MeetingsGeneral}
              isLoggedIn={this.state.isLoggedIn}
              hasPermission={userHasPermission(
                this.state.user.permissions,
                Permissions.Meetings
              )}
            />
            <PrivateRoute
              exact
              path="/reports"
              component={ReportsGeneral}
              isLoggedIn={this.state.isLoggedIn}
              hasPermission={userHasPermission(
                this.state.user.permissions,
                Permissions.Reports
              )}
            />
            <PrivateRoute
              exact
              path="/holidaycalendar"
              component={HolidayCalendarGeneral}
              isLoggedIn={this.state.isLoggedIn}
              hasPermission={userHasPermission(
                this.state.user.permissions,
                Permissions.HolidayCalendar
              )}
            />
            <PrivateRoute
              exact
              path="/organization"
              component={ManageOrganizationGeneral}
              isLoggedIn={this.state.isLoggedIn}
              hasPermission={userHasPermission(
                this.state.user.permissions,
                Permissions.ManageOrganization
              )}
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
        )}
      </React.Fragment>
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
