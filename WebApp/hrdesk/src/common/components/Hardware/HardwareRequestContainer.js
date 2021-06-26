import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as hardwareRequestActions from "../../../redux/actions/hardwareRequestActions";
import * as userActions from "../../../redux/actions/userActions";
import HardwareRequestGeneral from "./HardwareRequestGeneral";

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
    onGetHardwareRequests: async () => {
      return await dispatch(
        hardwareRequestActions.getAllUserHardwareRequests()
      );
    },
    onAddHardwareRequest: async (hardwareRequestModel) => {
      return await dispatch(
        hardwareRequestActions.addHardwareRequest(hardwareRequestModel)
      );
    },
    onDeleteHardwareRequest: async (hardwareRequestId) => {
      return await dispatch(
        hardwareRequestActions.deleteHardwareRequest(hardwareRequestId)
      );
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(withRouter(HardwareRequestGeneral));
