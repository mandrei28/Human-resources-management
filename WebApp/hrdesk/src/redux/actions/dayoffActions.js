import axiosWrapper from "../../api/axiosWrapper";
import { toastr } from "react-redux-toastr";
export const GET_DAYSOFF_SUCCESS = "GET_DAYSOFF_SUCCESS";
export const GET_DAYSOFF_ERROR = "GET_DAYSOFF_ERROR";
export const DELETE_DAYOFF_SUCCESS = "DELETE_DAYOFF_SUCCESS";
export const DELETE_DAYOFF_ERROR = "DELETE_DAYOFF_ERROR";
export const APPROVE_DAYOFF_SUCCESS = "APPROVE_DAYOFF_SUCCESS";
export const APPROVE_DAYOFF_ERROR = "APPROVE_DAYOFF_ERROR";

const apiClient = axiosWrapper();

export const getDaysoffSuccess = (dayoff) => {
  return {
    type: GET_DAYSOFF_SUCCESS,
    payload: dayoff,
  };
};

export const getDaysoffError = (error) => {
  return {
    type: GET_DAYSOFF_ERROR,
    error: error,
  };
};

export const approveDayoffSuccess = (dayoffModel) => {
  return {
    type: APPROVE_DAYOFF_SUCCESS,
    payload: dayoffModel,
  };
};

export const approveDayoffError = (error) => {
  return {
    type: APPROVE_DAYOFF_ERROR,
    payload: error,
  };
};
export const deleteDayoffSuccess = (dayoffModel) => {
  return {
    type: DELETE_DAYOFF_SUCCESS,
    payload: dayoffModel,
  };
};

export const deleteDayoffError = (error) => {
  return {
    type: DELETE_DAYOFF_ERROR,
    payload: error,
  };
};

export const getAllDaysoff = () => {
  return (dispatch) => {
    return apiClient
      .get("dayoff/getAllDaysoff")
      .then((response) => {
        dispatch(getDaysoffSuccess(response.data));
        toastr.success("Dayoff", "Data fetched with success");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(getDaysoffError(error));
        throw error;
      });
  };
};

// export const deleteDayoff = (dayoffId) => {
//   debugger;
//   return (dispatch) => {
//     return apiClient
//       .post(`dayoff/deleteDayoff/${dayoffId}`)
//       .then((response) => {
//         dispatch(deleteDayoffSuccess(response.data));
//         toastr.success("Dayoff", "Dayoff deleted");
//         return response.data;
//       })
//       .catch((error) => {
//         if (error.response !== undefined) {
//           toastr.error("Error", error.response.data.Message);
//         }
//         dispatch(deleteDayoffError(error));
//         throw error;
//       });
//   };
// };

export const approveDayoff = (dayoffId, shouldApprove) => {
  debugger;
  return (dispatch) => {
    return apiClient
      .put(`dayoff/approve/${dayoffId}`, shouldApprove)
      .then((response) => {
        dispatch(approveDayoffSuccess(response.data));
        toastr.success("Dayoff", "Dayoff changed");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(approveDayoffError(error));
        throw error;
      });
  };
};
