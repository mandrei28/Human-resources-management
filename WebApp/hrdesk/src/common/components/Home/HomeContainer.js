import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as meetingActions from "../../../redux/actions/meetingActions";
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(withRouter(HomeGeneral));
