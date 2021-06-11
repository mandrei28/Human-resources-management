import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as officeActions from "../../../../redux/actions/officeActions";
import * as meetingRoomActions from "../../../../redux/actions/meetingRoomActions";
import ManageRoomsGeneral from "./ManageRoomsGeneral";

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
    onAddOffice: async (officeModel) => {
      return await dispatch(officeActions.addOffice(officeModel));
    },
    onGetOffices: async () => {
      return await dispatch(officeActions.getAllOffices());
    },
    onDeleteOffice: async (officeId) => {
      return await dispatch(officeActions.deleteOffice(officeId));
    },
    onUpdateOffice: async (officeModel) => {
      return await dispatch(officeActions.updateOffice(officeModel));
    },
    onAddMeetingRoom: async (meetingRoomModel) => {
      return await dispatch(
        meetingRoomActions.addMeetingRoom(meetingRoomModel)
      );
    },
    onGetMeetingRooms: async () => {
      return await dispatch(meetingRoomActions.getAllMeetingRooms());
    },
    onDeleteMeetingRoom: async (meetingRoomId) => {
      return await dispatch(
        meetingRoomActions.deleteMeetingRoom(meetingRoomId)
      );
    },
    onUpdateMeetingRoom: async (meetingRoomModel) => {
      return await dispatch(
        meetingRoomActions.updateMeetingRoom(meetingRoomModel)
      );
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(withRouter(ManageRoomsGeneral));
