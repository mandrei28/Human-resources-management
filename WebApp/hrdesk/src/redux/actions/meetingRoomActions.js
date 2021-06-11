import axiosWrapper from "../../api/axiosWrapper";
import { toastr } from "react-redux-toastr";
export const GET_MEETINGROOMS_SUCCESS = "GET_MEETINGROOMS_SUCCESS";
export const GET_MEETINGROOMS_ERROR = "GET_MEETINGROOMS_ERROR";
export const ADD_MEETINGROOM_SUCCESS = "ADD_MEETINGROOM_SUCCESS";
export const ADD_MEETINGROOM_ERROR = "ADD_MEETINGROOM_ERROR";
export const DELETE_MEETINGROOM_SUCCESS = "DELETE_MEETINGROOM_SUCCESS";
export const DELETE_MEETINGROOM_ERROR = "DELETE_MEETINGROOM_ERROR";
export const UPDATE_MEETINGROOM_SUCCESS = "UPDATE_MEETINGROOM_SUCCESS";
export const UPDATE_MEETINGROOM_ERROR = "UPDATE_MEETINGROOM_ERROR";

const apiClient = axiosWrapper();

export const getMeetingRoomsSuccess = (meetingrooms) => {
  return {
    type: GET_MEETINGROOMS_SUCCESS,
    payload: meetingrooms,
  };
};

export const getMeetingRoomsError = (error) => {
  return {
    type: GET_MEETINGROOMS_ERROR,
    error: error,
  };
};

export const addMeetingRoomSuccess = (meetingRoomModel) => {
  return {
    type: ADD_MEETINGROOM_SUCCESS,
    payload: meetingRoomModel,
  };
};

export const addMeetingRoomError = (error) => {
  return {
    type: ADD_MEETINGROOM_ERROR,
    payload: error,
  };
};
export const updateMeetingRoomSuccess = (meetingRoomModel) => {
  return {
    type: UPDATE_MEETINGROOM_SUCCESS,
    payload: meetingRoomModel,
  };
};

export const updateMeetingRoomError = (error) => {
  return {
    type: UPDATE_MEETINGROOM_ERROR,
    payload: error,
  };
};
export const deleteMeetingRoomSuccess = (meetingRoomModel) => {
  return {
    type: DELETE_MEETINGROOM_SUCCESS,
    payload: meetingRoomModel,
  };
};

export const deleteMeetingRoomError = (error) => {
  return {
    type: DELETE_MEETINGROOM_ERROR,
    payload: error,
  };
};

export const getAllMeetingRooms = () => {
  return (dispatch) => {
    return apiClient
      .get("meetingRoom/getAllMeetingRooms")
      .then((response) => {
        dispatch(getMeetingRoomsSuccess(response.data));
        toastr.success("MeetingRoom", "Data fetched with success");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(getMeetingRoomsError(error));
        throw error;
      });
  };
};

export const addMeetingRoom = (meetingRoomModel) => {
  return (dispatch) => {
    return apiClient
      .post("meetingRoom/addMeetingRoom", meetingRoomModel)
      .then((response) => {
        dispatch(addMeetingRoomSuccess(response.data));
        toastr.success("MeetingRoom", "MeetingRoom added");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(addMeetingRoomError(error));
        throw error;
      });
  };
};

export const deleteMeetingRoom = (meetingRoomId) => {
  debugger;
  return (dispatch) => {
    return apiClient
      .post(`meetingRoom/deleteMeetingRoom/${meetingRoomId}`)
      .then((response) => {
        dispatch(deleteMeetingRoomSuccess(response.data));
        toastr.success("MeetingRoom", "MeetingRoom deleted");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(deleteMeetingRoomError(error));
        throw error;
      });
  };
};

export const updateMeetingRoom = (meetingRoomModel) => {
  debugger;
  return (dispatch) => {
    return apiClient
      .put(`meetingRoom/update`, meetingRoomModel)
      .then((response) => {
        dispatch(updateMeetingRoomSuccess(response.data));
        toastr.success("MeetingRoom", "MeetingRoom updated");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(updateMeetingRoomError(error));
        throw error;
      });
  };
};
