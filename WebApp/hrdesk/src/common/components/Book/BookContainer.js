import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as meetingRoomActions from "../../../redux/actions/meetingRoomActions";
import * as teamActions from "../../../redux/actions/teamActions";
import * as meetingActions from "../../../redux/actions/meetingActions";
import BookGeneral from "./BookGeneral";

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
    onGetMeetingRooms: async () => {
      return await dispatch(meetingRoomActions.getAllBookingMeetingRooms());
    },
    onGetTeams: async () => {
      return await dispatch(teamActions.getAllBookingTeams());
    },
    onGetMeetings: async () => {
      return await dispatch(meetingActions.getAllMeetings());
    },
    onAddMeeting: async (meetingModel) => {
      return await dispatch(meetingActions.addMeeting(meetingModel));
    },
    onDeleteMeeting: async (meetingId) => {
      return await dispatch(meetingActions.deleteMeeting(meetingId));
    },
    onUpdateMeeting: async (meetingModel) => {
      return await dispatch(meetingActions.updateMeeting(meetingModel));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(withRouter(BookGeneral));
