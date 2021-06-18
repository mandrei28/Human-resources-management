import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as userActions from "../../../redux/actions/userActions";
import EmployeesGeneral from "./EmployeesGeneral";

const mapStateToProps = (state, ownProps) => {
  return {};
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
    onGetUsers: async () => {
      return await dispatch(userActions.getUsers());
    },
    onDeleteUser: async (userId) => {
      return await dispatch(userActions.deleteUser(userId));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(withRouter(EmployeesGeneral));
