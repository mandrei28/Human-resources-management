import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as dayoffActions from "../../../../redux/actions/dayoffActions";
import ManageDaysoffRequestsGeneral from "./ManageDaysoffRequestsGeneral";

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
    onGetDaysoff: async () => {
      return await dispatch(dayoffActions.getAllDaysoff());
    },
    onApproveDayoff: async (dayoffId, newStatus) => {
      return await dispatch(dayoffActions.approveDayoff(dayoffId, newStatus));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(withRouter(ManageDaysoffRequestsGeneral));
