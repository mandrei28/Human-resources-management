import axiosWrapper from "../../api/axiosWrapper";
import { toastr } from "react-redux-toastr";
export const GET_TEAMS_SUCCESS = "GET_TEAMS_SUCCESS";
export const GET_TEAMS_ERROR = "GET_TEAMS_ERROR";
export const GET_BOOKING_TEAMS_SUCCESS = "GET_TEAMS_SUCCESS";
export const GET_BOOKING_TEAMS_ERROR = "GET_TEAMS_ERROR";
export const ADD_TEAM_SUCCESS = "ADD_TEAM_SUCCESS";
export const ADD_TEAM_ERROR = "ADD_TEAM_ERROR";
export const DELETE_TEAM_SUCCESS = "DELETE_TEAM_SUCCESS";
export const DELETE_TEAM_ERROR = "DELETE_TEAM_ERROR";
export const UPDATE_TEAM_SUCCESS = "UPDATE_TEAM_SUCCESS";
export const UPDATE_TEAM_ERROR = "UPDATE_TEAM_ERROR";

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

export const getBookingTeamsSuccess = (teams) => {
  return {
    type: GET_BOOKING_TEAMS_SUCCESS,
    payload: teams,
  };
};

export const getBookingTeamsError = (error) => {
  return {
    type: GET_BOOKING_TEAMS_ERROR,
    error: error,
  };
};

export const addTeamSuccess = (teamModel) => {
  return {
    type: ADD_TEAM_SUCCESS,
    payload: teamModel,
  };
};

export const addTeamError = (error) => {
  return {
    type: ADD_TEAM_ERROR,
    payload: error,
  };
};
export const updateTeamSuccess = (teamModel) => {
  return {
    type: UPDATE_TEAM_SUCCESS,
    payload: teamModel,
  };
};

export const updateTeamError = (error) => {
  return {
    type: UPDATE_TEAM_ERROR,
    payload: error,
  };
};
export const deleteTeamSuccess = (teamModel) => {
  return {
    type: DELETE_TEAM_SUCCESS,
    payload: teamModel,
  };
};

export const deleteTeamError = (error) => {
  return {
    type: DELETE_TEAM_ERROR,
    payload: error,
  };
};

export const getAllTeams = () => {
  return (dispatch) => {
    return apiClient
      .get("team/getAllTeams")
      .then((response) => {
        debugger;
        dispatch(getTeamsSuccess(response.data));
        toastr.success("Team", "Data fetched with success");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(getTeamsError(error));
        throw error;
      });
  };
};

export const getAllBookingTeams = () => {
  return (dispatch) => {
    return apiClient
      .get("team/getAllBookingTeams")
      .then((response) => {
        debugger;
        dispatch(getBookingTeamsSuccess(response.data));
        toastr.success("Team", "Data fetched with success");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(getBookingTeamsError(error));
        throw error;
      });
  };
};

export const addTeam = (teamModel) => {
  return (dispatch) => {
    return apiClient
      .post("team/addTeam", teamModel)
      .then((response) => {
        dispatch(addTeamSuccess(response.data));
        toastr.success("Team", "Team added");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(addTeamError(error));
        throw error;
      });
  };
};

export const deleteTeam = (teamId) => {
  debugger;
  return (dispatch) => {
    return apiClient
      .post(`team/deleteTeam/${teamId}`)
      .then((response) => {
        dispatch(deleteTeamSuccess(response.data));
        toastr.success("Team", "Team deleted");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(deleteTeamError(error));
        throw error;
      });
  };
};

export const updateTeam = (teamModel) => {
  debugger;
  return (dispatch) => {
    return apiClient
      .put(`team/update`, teamModel)
      .then((response) => {
        dispatch(updateTeamSuccess(response.data));
        toastr.success("Team", "Team updated");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(updateTeamError(error));
        throw error;
      });
  };
};
