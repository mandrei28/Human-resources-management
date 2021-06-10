import axiosWrapper from "../../api/axiosWrapper";
import { toastr } from "react-redux-toastr";
export const GET_OFFICES_SUCCESS = "GET_OFFICES_SUCCESS";
export const GET_OFFICES_ERROR = "GET_OFFICES_ERROR";

const apiClient = axiosWrapper();

export const getOfficesSuccess = (offices) => {
  return {
    type: GET_OFFICES_SUCCESS,
    payload: offices,
  };
};

export const getOfficesError = (error) => {
  return {
    type: GET_OFFICES_ERROR,
    error: error,
  };
};

export const getAllOffices = () => {
  return (dispatch) => {
    return apiClient
      .get("office/getAllOffices")
      .then((response) => {
        dispatch(getOfficesSuccess(response.data));
        toastr.success("Office", "Data fetched with success");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(getOfficesError(error));
        throw error;
      });
  };
};
