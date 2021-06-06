import axiosWrapper from "../../api/axiosWrapper";
import { toastr } from "react-redux-toastr";
export const GET_FUNCTIONS_SUCCESS = "GET_FUNCTIONS_SUCCESS";
export const GET_FUNCTIONS_ERROR = "GET_FUNCTIONS_ERROR";

const apiClient = axiosWrapper();

export const getFunctionsSuccess = (functions) => {
  return {
    type: GET_FUNCTIONS_SUCCESS,
    payload: functions,
  };
};

export const getFunctionsError = (error) => {
  return {
    type: GET_FUNCTIONS_ERROR,
    error: error,
  };
};

export const getAllFunctions = () => {
  return (dispatch) => {
    return apiClient
      .get("function/getAllFunctions")
      .then((response) => {
        dispatch(getFunctionsSuccess(response.data));
        toastr.success("Functions", "Data fetched with success");
        return response.data;
      })
      .catch((error) => {
        toastr.error("Error", error.response.data.Message);
        dispatch(getFunctionsError(error));
        throw error;
      });
  };
};
