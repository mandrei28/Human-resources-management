import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as leaveRequestActions from "../../../../redux/actions/leaveRequestActions";
import ManageLeaveRequestsGeneral from "./ManageLeaveRequestsGeneral";

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
    onGetLeaveRequests: async () => {
      return await dispatch(leaveRequestActions.getAllLeaveRequests());
    },
    onApproveLeaveRequest: async (leaveRequestId, newStatus) => {
      return await dispatch(
        leaveRequestActions.approveLeaveRequest(leaveRequestId, newStatus)
      );
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(withRouter(ManageLeaveRequestsGeneral));
