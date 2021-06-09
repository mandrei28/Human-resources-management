import axiosWrapper from "../../api/axiosWrapper";
import { toastr } from "react-redux-toastr";
export const GET_FUNCTIONS_SUCCESS = "GET_FUNCTIONS_SUCCESS";
export const GET_FUNCTIONS_ERROR = "GET_FUNCTIONS_ERROR";
export const ADD_FUNCTION_SUCCESS = "ADD_FUNCTION_SUCCESS";
export const ADD_FUNCTION_ERROR = "ADD_FUNCTION_ERROR";
export const DELETE_FUNCTION_SUCCESS = "DELETE_FUNCTION_SUCCESS";
export const DELETE_FUNCTION_ERROR = "DELETE_FUNCTION_ERROR";
export const UPDATE_FUNCTION_SUCCESS = "UPDATE_FUNCTION_SUCCESS";
export const UPDATE_FUNCTION_ERROR = "UPDATE_FUNCTION_ERROR";
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

export const addFunctionSuccess = (functionModel) => {
  return {
    type: ADD_FUNCTION_SUCCESS,
    payload: functionModel,
  };
};

export const addFunctionError = (error) => {
  return {
    type: ADD_FUNCTION_ERROR,
    payload: error,
  };
};
export const updateFunctionSuccess = (functionModel) => {
  return {
    type: UPDATE_FUNCTION_SUCCESS,
    payload: functionModel,
  };
};

export const updateFunctionError = (error) => {
  return {
    type: UPDATE_FUNCTION_ERROR,
    payload: error,
  };
};
export const deleteFunctionSuccess = (functionModel) => {
  return {
    type: DELETE_FUNCTION_SUCCESS,
    payload: functionModel,
  };
};

export const deleteFunctionError = (error) => {
  return {
    type: DELETE_FUNCTION_ERROR,
    payload: error,
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

export const addFunction = (functionModel) => {
  debugger;
  return (dispatch) => {
    return apiClient
      .post("function/addFunction", functionModel)
      .then((response) => {
        dispatch(addFunctionSuccess(response.data));
        toastr.success("Function", "Function added");
        return response.data;
      })
      .catch((error) => {
        toastr.error("Error", error.response.data.Message);
        dispatch(addFunctionError(error));
        throw error;
      });
  };
};

export const deleteFunction = (functionId) => {
  debugger;
  return (dispatch) => {
    return apiClient
      .post(`function/deleteFunction/${functionId}`)
      .then((response) => {
        dispatch(deleteFunctionSuccess(response.data));
        toastr.success("Function", "Function deleted");
        return response.data;
      })
      .catch((error) => {
        toastr.error("Error", error.response.data.Message);
        dispatch(deleteFunctionError(error));
        throw error;
      });
  };
};

export const updateFunction = (functionModel) => {
  debugger;
  return (dispatch) => {
    return apiClient
      .put(`function/update`, functionModel)
      .then((response) => {
        dispatch(updateFunctionSuccess(response.data));
        toastr.success("Function", "Function updated");
        return response.data;
      })
      .catch((error) => {
        toastr.error("Error", error.response.data.Message);
        dispatch(updateFunctionError(error));
        throw error;
      });
  };
};
