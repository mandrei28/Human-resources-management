import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as dayoffActions from "../../../redux/actions/dayoffActions";
import HolidayCalendarGeneral from "./HolidayCalendarGeneral";

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
    onGetHolidayCalendar: async () => {
      return await dispatch(dayoffActions.getHolidayCalendar());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(withRouter(HolidayCalendarGeneral));
