import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as dayoffActions from "../../../redux/actions/dayoffActions";
import * as userActions from "../../../redux/actions/userActions";
import DaysoffGeneral from "./DaysoffGeneral";

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
    onGetDayoffs: async () => {
      return await dispatch(dayoffActions.getAllUserDayoffs());
    },
    onAddDayoff: async (dayoffModel) => {
      return await dispatch(dayoffActions.addDayoff(dayoffModel));
    },
    onDeleteDayoff: async (dayoffId) => {
      return await dispatch(dayoffActions.deleteDayoff(dayoffId));
    },
    onGetDayoffChartData: async () => {
      return await dispatch(dayoffActions.getDayoffChartData());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(withRouter(DaysoffGeneral));
