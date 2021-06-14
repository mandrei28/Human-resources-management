import axiosWrapper from "../../api/axiosWrapper";
import { toastr } from "react-redux-toastr";
export const GET_MEETINGS_SUCCESS = "GET_MEETINGS_SUCCESS";
export const GET_MEETINGS_ERROR = "GET_MEETINGS_ERROR";
export const GET_MEETINGS_BETWEEN_DATES_SUCCESS =
  "GET_MEETINGS_BETWEEN_DATES_SUCCESS";
export const GET_MEETINGS_BETWEEN_DATES_ERROR =
  "GET_MEETINGS_BETWEEN_DATES_ERROR";
export const ADD_MEETING_SUCCESS = "ADD_MEETING_SUCCESS";
export const ADD_MEETING_ERROR = "ADD_MEETING_ERROR";
export const DELETE_MEETING_SUCCESS = "DELETE_MEETING_SUCCESS";
export const DELETE_MEETING_ERROR = "DELETE_MEETING_ERROR";
export const UPDATE_MEETING_SUCCESS = "UPDATE_MEETING_SUCCESS";
export const UPDATE_MEETING_ERROR = "UPDATE_MEETING_ERROR";

const apiClient = axiosWrapper();

export const getMeetingsSuccess = (meetings) => {
  return {
    type: GET_MEETINGS_SUCCESS,
    payload: meetings,
  };
};

export const getMeetingsError = (error) => {
  return {
    type: GET_MEETINGS_ERROR,
    error: error,
  };
};

export const getMeetingsBetweenRangeSuccess = (meetings) => {
  return {
    type: GET_MEETINGS_BETWEEN_DATES_SUCCESS,
    payload: meetings,
  };
};

export const getMeetingsBetweenRangeError = (error) => {
  return {
    type: GET_MEETINGS_BETWEEN_DATES_ERROR,
    error: error,
  };
};

export const addMeetingSuccess = (meetingModel) => {
  return {
    type: ADD_MEETING_SUCCESS,
    payload: meetingModel,
  };
};

export const addMeetingError = (error) => {
  return {
    type: ADD_MEETING_ERROR,
    payload: error,
  };
};
export const updateMeetingSuccess = (meetingModel) => {
  return {
    type: UPDATE_MEETING_SUCCESS,
    payload: meetingModel,
  };
};

export const updateMeetingError = (error) => {
  return {
    type: UPDATE_MEETING_ERROR,
    payload: error,
  };
};
export const deleteMeetingSuccess = (meetingModel) => {
  return {
    type: DELETE_MEETING_SUCCESS,
    payload: meetingModel,
  };
};

export const deleteMeetingError = (error) => {
  return {
    type: DELETE_MEETING_ERROR,
    payload: error,
  };
};

export const getAllMeetings = () => {
  return (dispatch) => {
    return apiClient
      .get("meeting/getAllMeetings")
      .then((response) => {
        debugger;
        dispatch(getMeetingsSuccess(response.data));
        toastr.success("Meeting", "Data fetched with success");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(getMeetingsError(error));
        throw error;
      });
  };
};

export const getAllMeetingsBetweenRange = (range) => {
  return (dispatch) => {
    return apiClient
      .post(`meeting/getAllMeetingsBetweenRange`, range)
      .then((response) => {
        debugger;
        dispatch(getMeetingsBetweenRangeSuccess(response.data));
        toastr.success("Meeting", "Data fetched with success");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(getMeetingsBetweenRangeError(error));
        throw error;
      });
  };
};

export const addMeeting = (meetingModel) => {
  return (dispatch) => {
    return apiClient
      .post("meeting/addMeeting", meetingModel)
      .then((response) => {
        dispatch(addMeetingSuccess(response.data));
        toastr.success("Meeting", "Meeting added");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(addMeetingError(error));
        throw error;
      });
  };
};

export const deleteMeeting = (meetingId) => {
  debugger;
  return (dispatch) => {
    return apiClient
      .post(`meeting/deleteMeeting/${meetingId}`)
      .then((response) => {
        dispatch(deleteMeetingSuccess(response.data));
        toastr.success("Meeting", "Meeting deleted");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(deleteMeetingError(error));
        throw error;
      });
  };
};

export const updateMeeting = (meetingModel) => {
  debugger;
  return (dispatch) => {
    return apiClient
      .put(`meeting/update`, meetingModel)
      .then((response) => {
        dispatch(updateMeetingSuccess(response.data));
        toastr.success("Meeting", "Meeting updated");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(updateMeetingError(error));
        throw error;
      });
  };
};
