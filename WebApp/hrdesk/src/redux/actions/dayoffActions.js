import axiosWrapper from "../../api/axiosWrapper";
import { toastr } from "react-redux-toastr";
export const GET_DAYSOFF_SUCCESS = "GET_DAYSOFF_SUCCESS";
export const GET_DAYSOFF_ERROR = "GET_DAYSOFF_ERROR";
export const GET_HOLIDAY_CALENDAR_SUCCESS = "GET_HOLIDAY_CALENDAR_SUCCESS";
export const GET_HOLIDAY_CALENDAR_ERROR = "GET_HOLIDAY_CALENDAR_ERROR";
export const DELETE_DAYOFF_SUCCESS = "DELETE_DAYOFF_SUCCESS";
export const DELETE_DAYOFF_ERROR = "DELETE_DAYOFF_ERROR";
export const ADD_DAYOFF_SUCCESS = "ADD_DAYOFF_SUCCESS";
export const ADD_DAYOFF_ERROR = "ADD_DAYOFF_ERROR";
export const GET_USER_DAYOFFS_SUCCESS = "GET_USER_DAYOFFS_SUCCESS";
export const GET_USER_DAYOFFS_ERROR = "GET_USER_DAYOFFS_ERROR";
export const GET_DAYOFF_CHART_DATA_SUCCESS = "GET_DAYOFF_CHART_DATA_SUCCESS";
export const GET_DAYOFF_CHART_DATA_ERROR = "GET_DAYOFF_CHART_DATA_ERROR";
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

export const getUserDayoffsSuccess = (dayoffs) => {
  return {
    type: GET_USER_DAYOFFS_SUCCESS,
    payload: dayoffs,
  };
};

export const getUserDayoffsError = (error) => {
  return {
    type: GET_USER_DAYOFFS_ERROR,
    error: error,
  };
};

export const getDayoffChartDataSuccess = (chartData) => {
  return {
    type: GET_DAYOFF_CHART_DATA_SUCCESS,
    payload: chartData,
  };
};

export const getDayoffChartDataError = (error) => {
  return {
    type: GET_DAYOFF_CHART_DATA_ERROR,
    error: error,
  };
};

export const addDayOffSuccess = (dayoffModel) => {
  return {
    type: ADD_DAYOFF_SUCCESS,
    payload: dayoffModel,
  };
};

export const addDayOffError = (error) => {
  return {
    type: ADD_DAYOFF_ERROR,
    payload: error,
  };
};

export const getHolidayCalendarSuccess = (holidayCalendar) => {
  return {
    type: GET_HOLIDAY_CALENDAR_SUCCESS,
    payload: holidayCalendar,
  };
};

export const getHolidayCalendarError = (error) => {
  return {
    type: GET_HOLIDAY_CALENDAR_ERROR,
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

export const getHolidayCalendar = () => {
  return (dispatch) => {
    return apiClient
      .get("dayoff/getHolidayCalendar")
      .then((response) => {
        dispatch(getHolidayCalendarSuccess(response.data));
        toastr.success("Holiday calendar", "Data fetched with success");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(getHolidayCalendarError(error));
        throw error;
      });
  };
};

export const addDayoff = (dayoffModel) => {
  return (dispatch) => {
    return apiClient
      .post("dayoff/addDayoff", dayoffModel)
      .then((response) => {
        dispatch(addDayOffSuccess(response.data));
        toastr.success("Dayoff", "Dayoff added");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(addDayOffError(error));
        throw error;
      });
  };
};

export const deleteDayoff = (dayoffId) => {
  return (dispatch) => {
    return apiClient
      .post(`dayoff/deleteDayoff/${dayoffId}`)
      .then((response) => {
        dispatch(deleteDayoffSuccess(response.data));
        toastr.success("Dayoff", "Dayoff deleted");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(deleteDayoffError(error));
        throw error;
      });
  };
};

export const getAllUserDayoffs = () => {
  return (dispatch) => {
    return apiClient
      .get("dayoff/getAllUserDayoffs")
      .then((response) => {
        dispatch(getUserDayoffsSuccess(response.data));
        toastr.success("DayOff", "Data fetched with success");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(getUserDayoffsError(error));
        throw error;
      });
  };
};

export const getDayoffChartData = () => {
  return (dispatch) => {
    return apiClient
      .get("dayoff/getDayoffChartData")
      .then((response) => {
        dispatch(getDayoffChartDataSuccess(response.data));
        toastr.success("Dayoff chart", "Data fetched with success");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(getDayoffChartDataError(error));
        throw error;
      });
  };
};

export const approveDayoff = (dayoffId, shouldApprove) => {
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
