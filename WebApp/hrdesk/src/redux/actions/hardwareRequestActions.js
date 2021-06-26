import axiosWrapper from "../../api/axiosWrapper";
import { toastr } from "react-redux-toastr";
export const GET_HARDWAREREQUESTS_SUCCESS = "GET_HARDWAREREQUESTS_SUCCESS";
export const GET_HARDWAREREQUESTS_ERROR = "GET_HARDWAREREQUESTS_ERROR";
export const ADD_HARDWAREREQUEST_SUCCESS = "ADD_HARDWAREREQUEST_SUCCESS";
export const ADD_HARDWAREREQUEST_ERROR = "ADD_HARDWAREREQUEST_ERROR";
export const GET_USER_HARDWAREREQUESTS_SUCCESS =
  "GET_USER_HARDWAREREQUESTS_SUCCESS";
export const GET_USER_HARDWAREREQUESTS_ERROR =
  "GET_USER_HARDWAREREQUESTS_ERROR";
export const DELETE_HARDWAREREQUEST_SUCCESS = "DELETE_HARDWAREREQUEST_SUCCESS";
export const DELETE_HARDWAREREQUEST_ERROR = "DELETE_HARDWAREREQUEST_ERROR";
export const APPROVE_HARDWAREREQUEST_SUCCESS =
  "APPROVE_HARDWAREREQUEST_SUCCESS";
export const APPROVE_HARDWAREREQUEST_ERROR = "APPROVE_HARDWAREREQUEST_ERROR";

const apiClient = axiosWrapper();

export const getHardwareRequestsSuccess = (hardwarerequests) => {
  return {
    type: GET_HARDWAREREQUESTS_SUCCESS,
    payload: hardwarerequests,
  };
};

export const getHardwareRequestsError = (error) => {
  return {
    type: GET_HARDWAREREQUESTS_ERROR,
    error: error,
  };
};

export const getUserHardwareRequestsSuccess = (hardwarerequests) => {
  return {
    type: GET_USER_HARDWAREREQUESTS_SUCCESS,
    payload: hardwarerequests,
  };
};

export const getUserHardwareRequestsError = (error) => {
  return {
    type: GET_USER_HARDWAREREQUESTS_ERROR,
    error: error,
  };
};

export const approveHardwareRequestSuccess = (hardwareRequestModel) => {
  return {
    type: APPROVE_HARDWAREREQUEST_SUCCESS,
    payload: hardwareRequestModel,
  };
};

export const approveHardwareRequestError = (error) => {
  return {
    type: APPROVE_HARDWAREREQUEST_ERROR,
    payload: error,
  };
};

export const addHardwareRequestSuccess = (hardwareRequestModel) => {
  return {
    type: ADD_HARDWAREREQUEST_SUCCESS,
    payload: hardwareRequestModel,
  };
};

export const addHardwareRequestError = (error) => {
  return {
    type: ADD_HARDWAREREQUEST_ERROR,
    payload: error,
  };
};

export const deleteHardwareRequestSuccess = (hardwareRequestModel) => {
  return {
    type: DELETE_HARDWAREREQUEST_SUCCESS,
    payload: hardwareRequestModel,
  };
};

export const deleteHardwareRequestError = (error) => {
  return {
    type: DELETE_HARDWAREREQUEST_ERROR,
    payload: error,
  };
};

export const getAllHardwareRequests = () => {
  return (dispatch) => {
    return apiClient
      .get("hardwareRequest/getAllHardwareRequests")
      .then((response) => {
        dispatch(getHardwareRequestsSuccess(response.data));
        toastr.success("HardwareRequest", "Data fetched with success");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(getHardwareRequestsError(error));
        throw error;
      });
  };
};

export const addHardwareRequest = (hardwareRequestModel) => {
  return (dispatch) => {
    return apiClient
      .post("hardwareRequest/addHardwareRequest", hardwareRequestModel)
      .then((response) => {
        dispatch(addHardwareRequestSuccess(response.data));
        toastr.success("Hardware Request", "Hardware Request added");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(addHardwareRequestError(error));
        throw error;
      });
  };
};

export const deleteHardwareRequest = (hardwareRequestId) => {
  return (dispatch) => {
    return apiClient
      .post(`hardwareRequest/deleteHardwareRequest/${hardwareRequestId}`)
      .then((response) => {
        dispatch(deleteHardwareRequestSuccess(response.data));
        toastr.success("Hardware Request", "Hardware Request deleted");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(deleteHardwareRequestError(error));
        throw error;
      });
  };
};

export const getAllUserHardwareRequests = () => {
  return (dispatch) => {
    return apiClient
      .get("hardwareRequest/getAllUserHardwareRequests")
      .then((response) => {
        dispatch(getUserHardwareRequestsSuccess(response.data));
        toastr.success("HardwareRequest", "Data fetched with success");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(getUserHardwareRequestsError(error));
        throw error;
      });
  };
};

export const approveHardwareRequest = (hardwareRequestId, shouldApprove) => {
  return (dispatch) => {
    return apiClient
      .put(`hardwareRequest/approve/${hardwareRequestId}`, shouldApprove)
      .then((response) => {
        dispatch(approveHardwareRequestSuccess(response.data));
        toastr.success("HardwareRequest", "HardwareRequest changed");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(approveHardwareRequestError(error));
        throw error;
      });
  };
};
