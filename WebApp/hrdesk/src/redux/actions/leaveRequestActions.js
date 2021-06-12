import axiosWrapper from "../../api/axiosWrapper";
import { toastr } from "react-redux-toastr";
export const GET_LEAVEREQUESTS_SUCCESS = "GET_LEAVEREQUESTS_SUCCESS";
export const GET_LEAVEREQUESTS_ERROR = "GET_LEAVEREQUESTS_ERROR";
export const DELETE_LEAVEREQUEST_SUCCESS = "DELETE_LEAVEREQUEST_SUCCESS";
export const DELETE_LEAVEREQUEST_ERROR = "DELETE_LEAVEREQUEST_ERROR";
export const APPROVE_LEAVEREQUEST_SUCCESS = "APPROVE_LEAVEREQUEST_SUCCESS";
export const APPROVE_LEAVEREQUEST_ERROR = "APPROVE_LEAVEREQUEST_ERROR";

const apiClient = axiosWrapper();

export const getLeaveRequestsSuccess = (leaverequests) => {
  return {
    type: GET_LEAVEREQUESTS_SUCCESS,
    payload: leaverequests,
  };
};

export const getLeaveRequestsError = (error) => {
  return {
    type: GET_LEAVEREQUESTS_ERROR,
    error: error,
  };
};

export const approveLeaveRequestSuccess = (leaveRequestModel) => {
  return {
    type: APPROVE_LEAVEREQUEST_SUCCESS,
    payload: leaveRequestModel,
  };
};

export const approveLeaveRequestError = (error) => {
  return {
    type: APPROVE_LEAVEREQUEST_ERROR,
    payload: error,
  };
};
export const deleteLeaveRequestSuccess = (leaveRequestModel) => {
  return {
    type: DELETE_LEAVEREQUEST_SUCCESS,
    payload: leaveRequestModel,
  };
};

export const deleteLeaveRequestError = (error) => {
  return {
    type: DELETE_LEAVEREQUEST_ERROR,
    payload: error,
  };
};

export const getAllLeaveRequests = () => {
  return (dispatch) => {
    return apiClient
      .get("leaveRequest/getAllLeaveRequests")
      .then((response) => {
        dispatch(getLeaveRequestsSuccess(response.data));
        toastr.success("LeaveRequest", "Data fetched with success");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(getLeaveRequestsError(error));
        throw error;
      });
  };
};

// export const deleteLeaveRequest = (leaveRequestId) => {
//   debugger;
//   return (dispatch) => {
//     return apiClient
//       .post(`leaveRequest/deleteLeaveRequest/${leaveRequestId}`)
//       .then((response) => {
//         dispatch(deleteLeaveRequestSuccess(response.data));
//         toastr.success("LeaveRequest", "LeaveRequest deleted");
//         return response.data;
//       })
//       .catch((error) => {
//         if (error.response !== undefined) {
//           toastr.error("Error", error.response.data.Message);
//         }
//         dispatch(deleteLeaveRequestError(error));
//         throw error;
//       });
//   };
// };

export const approveLeaveRequest = (leaveRequestId, shouldApprove) => {
  debugger;
  return (dispatch) => {
    return apiClient
      .put(`leaveRequest/approve/${leaveRequestId}`, shouldApprove)
      .then((response) => {
        dispatch(approveLeaveRequestSuccess(response.data));
        toastr.success("LeaveRequest", "LeaveRequest changed");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(approveLeaveRequestError(error));
        throw error;
      });
  };
};
