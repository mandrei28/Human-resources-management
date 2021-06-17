import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as meetingActions from "../../../redux/actions/meetingActions";
import * as userActions from "../../../redux/actions/userActions";
import HomeGeneral from "./HomeGeneral";

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
    onGetUpcomingMeetings: async () => {
      return await dispatch(meetingActions.getUpcomingMeetings());
    },
    onGetStatistics: async () => {
      return await dispatch(userActions.getStatistics());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(withRouter(HomeGeneral));
