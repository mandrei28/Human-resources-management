import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as officeActions from "../../../redux/actions/officeActions";
import * as functionActions from "../../../redux/actions/functionActions";
import * as teamActions from "../../../redux/actions/teamActions";
import * as userActions from "../../../redux/actions/userActions";
import EmployeeGeneral from "./EmployeeGeneral";

const mapStateToProps = (state, ownProps) => {
  return {
    offices: state.officeReducer.offices,
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
    onGetOffices: async () => {
      return await dispatch(officeActions.getAllOffices());
    },
    onGetFunctions: async () => {
      return await dispatch(functionActions.getAllFunctions());
    },
    onGetTeams: async () => {
      return await dispatch(teamActions.getAllTeams());
    },
    onAddUser: async (userModel, history) => {
      return await dispatch(userActions.registerUser(userModel, history));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(withRouter(EmployeeGeneral));
