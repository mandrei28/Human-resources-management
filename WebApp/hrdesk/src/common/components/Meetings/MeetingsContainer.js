import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as meetingActions from "../../../redux/actions/meetingActions";
import MeetingsGeneral from "./MeetingsGeneral";

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
    onGetMeetings: async (dates) => {
      debugger;
      return await dispatch(meetingActions.getAllMeetingsBetweenRange(dates));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(withRouter(MeetingsGeneral));
