import axiosWrapper from "../../api/axiosWrapper";
import { toastr } from "react-redux-toastr";
export const GET_OFFICES_SUCCESS = "GET_OFFICES_SUCCESS";
export const GET_OFFICES_ERROR = "GET_OFFICES_ERROR";
export const ADD_OFFICE_SUCCESS = "ADD_OFFICE_SUCCESS";
export const ADD_OFFICE_ERROR = "ADD_OFFICE_ERROR";
export const DELETE_OFFICE_SUCCESS = "DELETE_OFFICE_SUCCESS";
export const DELETE_OFFICE_ERROR = "DELETE_OFFICE_ERROR";
export const UPDATE_OFFICE_SUCCESS = "UPDATE_OFFICE_SUCCESS";
export const UPDATE_OFFICE_ERROR = "UPDATE_OFFICE_ERROR";

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

export const addOfficeSuccess = (officeModel) => {
  return {
    type: ADD_OFFICE_SUCCESS,
    payload: officeModel,
  };
};

export const addOfficeError = (error) => {
  return {
    type: ADD_OFFICE_ERROR,
    payload: error,
  };
};
export const updateOfficeSuccess = (officeModel) => {
  return {
    type: UPDATE_OFFICE_SUCCESS,
    payload: officeModel,
  };
};

export const updateOfficeError = (error) => {
  return {
    type: UPDATE_OFFICE_ERROR,
    payload: error,
  };
};
export const deleteOfficeSuccess = (officeModel) => {
  return {
    type: DELETE_OFFICE_SUCCESS,
    payload: officeModel,
  };
};

export const deleteOfficeError = (error) => {
  return {
    type: DELETE_OFFICE_ERROR,
    payload: error,
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

export const addOffice = (officeModel) => {
  return (dispatch) => {
    return apiClient
      .post("office/addOffice", officeModel)
      .then((response) => {
        dispatch(addOfficeSuccess(response.data));
        toastr.success("Office", "Office added");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(addOfficeError(error));
        throw error;
      });
  };
};

export const deleteOffice = (officeId) => {
  return (dispatch) => {
    return apiClient
      .post(`office/deleteOffice/${officeId}`)
      .then((response) => {
        dispatch(deleteOfficeSuccess(response.data));
        toastr.success("Office", "Office deleted");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(deleteOfficeError(error));
        throw error;
      });
  };
};

export const updateOffice = (officeModel) => {
  return (dispatch) => {
    return apiClient
      .put(`office/update`, officeModel)
      .then((response) => {
        dispatch(updateOfficeSuccess(response.data));
        toastr.success("Office", "Office updated");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(updateOfficeError(error));
        throw error;
      });
  };
};
