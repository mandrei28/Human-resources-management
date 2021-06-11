import axiosWrapper from "../../api/axiosWrapper";
import { toastr } from "react-redux-toastr";
export const GET_NATIONALDAYS_SUCCESS = "GET_NATIONALDAYS_SUCCESS";
export const GET_NATIONALDAYS_ERROR = "GET_NATIONALDAYS_ERROR";
export const ADD_NATIONALDAY_SUCCESS = "ADD_NATIONALDAY_SUCCESS";
export const ADD_NATIONALDAY_ERROR = "ADD_NATIONALDAY_ERROR";
export const DELETE_NATIONALDAY_SUCCESS = "DELETE_NATIONALDAY_SUCCESS";
export const DELETE_NATIONALDAY_ERROR = "DELETE_NATIONALDAY_ERROR";
export const UPDATE_NATIONALDAY_SUCCESS = "UPDATE_NATIONALDAY_SUCCESS";
export const UPDATE_NATIONALDAY_ERROR = "UPDATE_NATIONALDAY_ERROR";

const apiClient = axiosWrapper();

export const getNationalDaysSuccess = (nationalDays) => {
  return {
    type: GET_NATIONALDAYS_SUCCESS,
    payload: nationalDays,
  };
};

export const getNationalDaysError = (error) => {
  return {
    type: GET_NATIONALDAYS_ERROR,
    error: error,
  };
};

export const addNationalDaySuccess = (nationalDayModel) => {
  return {
    type: ADD_NATIONALDAY_SUCCESS,
    payload: nationalDayModel,
  };
};

export const addNationalDayError = (error) => {
  return {
    type: ADD_NATIONALDAY_ERROR,
    payload: error,
  };
};
export const updateNationalDaySuccess = (nationalDayModel) => {
  return {
    type: UPDATE_NATIONALDAY_SUCCESS,
    payload: nationalDayModel,
  };
};

export const updateNationalDayError = (error) => {
  return {
    type: UPDATE_NATIONALDAY_ERROR,
    payload: error,
  };
};
export const deleteNationalDaySuccess = (nationalDayModel) => {
  return {
    type: DELETE_NATIONALDAY_SUCCESS,
    payload: nationalDayModel,
  };
};

export const deleteNationalDayError = (error) => {
  return {
    type: DELETE_NATIONALDAY_ERROR,
    payload: error,
  };
};

export const getAllNationalDays = () => {
  return (dispatch) => {
    return apiClient
      .get("nationalDay/getAllNationalDays")
      .then((response) => {
        dispatch(getNationalDaysSuccess(response.data));
        toastr.success("NationalDay", "Data fetched with success");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(getNationalDaysError(error));
        throw error;
      });
  };
};

export const addNationalDay = (nationalDayModel) => {
  return (dispatch) => {
    return apiClient
      .post("nationalDay/addNationalDay", nationalDayModel)
      .then((response) => {
        dispatch(addNationalDaySuccess(response.data));
        toastr.success("NationalDay", "NationalDay added");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(addNationalDayError(error));
        throw error;
      });
  };
};

export const deleteNationalDay = (nationalDayId) => {
  debugger;
  return (dispatch) => {
    return apiClient
      .post(`nationalDay/deleteNationalDay/${nationalDayId}`)
      .then((response) => {
        dispatch(deleteNationalDaySuccess(response.data));
        toastr.success("NationalDay", "NationalDay deleted");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(deleteNationalDayError(error));
        throw error;
      });
  };
};

export const updateNationalDay = (nationalDayModel) => {
  debugger;
  return (dispatch) => {
    return apiClient
      .put(`nationalDay/update`, nationalDayModel)
      .then((response) => {
        dispatch(updateNationalDaySuccess(response.data));
        toastr.success("NationalDay", "NationalDay updated");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(updateNationalDayError(error));
        throw error;
      });
  };
};
