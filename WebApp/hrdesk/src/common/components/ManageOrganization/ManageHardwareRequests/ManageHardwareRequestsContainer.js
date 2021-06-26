import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as hardwareRequestActions from "../../../../redux/actions/hardwareRequestActions";
import ManageHardwareRequestsGeneral from "./ManageHardwareRequestsGeneral";

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
    onGetHardwareRequests: async () => {
      return await dispatch(hardwareRequestActions.getAllHardwareRequests());
    },
    onApproveHardwareRequest: async (hardwareRequestId, newStatus) => {
      return await dispatch(
        hardwareRequestActions.approveHardwareRequest(
          hardwareRequestId,
          newStatus
        )
      );
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(withRouter(ManageHardwareRequestsGeneral));
