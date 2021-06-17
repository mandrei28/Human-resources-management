import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as leaveRequestActions from "../../../redux/actions/leaveRequestActions";
import * as userActions from "../../../redux/actions/userActions";
import LeaveRequestGeneral from "./LeaveRequestGeneral";

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
    onGetAdmins: async () => {
      return await dispatch(userActions.getAdmins());
    },
    onGetLeaveRequests: async () => {
      return await dispatch(leaveRequestActions.getAllUserLeaveRequests());
    },
    onAddLeaveRequest: async (leaveRequestModel) => {
      return await dispatch(
        leaveRequestActions.addLeaveRequest(leaveRequestModel)
      );
    },
    onDeleteLeaveRequest: async (leaveRequestId) => {
      return await dispatch(
        leaveRequestActions.deleteLeaveRequest(leaveRequestId)
      );
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(withRouter(LeaveRequestGeneral));
