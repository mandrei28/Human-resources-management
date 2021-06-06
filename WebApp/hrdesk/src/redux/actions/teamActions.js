import axiosWrapper from "../../api/axiosWrapper";
import { toastr } from "react-redux-toastr";
export const GET_TEAMS_SUCCESS = "GET_TEAMS_SUCCESS";
export const GET_TEAMS_ERROR = "GET_TEAMS_ERROR";

const apiClient = axiosWrapper();

export const getTeamsSuccess = (teams) => {
  return {
    type: GET_TEAMS_SUCCESS,
    payload: teams,
  };
};

export const getTeamsError = (error) => {
  return {
    type: GET_TEAMS_ERROR,
    error: error,
  };
};

export const getAllTeams = () => {
  return (dispatch) => {
    return apiClient
      .get("team/getAllTeams")
      .then((response) => {
        dispatch(getTeamsSuccess(response.data));
        toastr.success("Team", "Data fetched with success");
        return response.data;
      })
      .catch((error) => {
        toastr.error("Error", error.response.data.Message);
        dispatch(getTeamsError(error));
        throw error;
      });
  };
};
