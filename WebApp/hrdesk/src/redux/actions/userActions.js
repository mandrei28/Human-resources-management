import axiosWrapper from "../../api/axiosWrapper";
import { storeToken } from "../../services/storage";
import { toastr } from "react-redux-toastr";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
export const GET_ADMINS_SUCCESS = "GET_ADMINS_SUCCESS";
export const GET_ADMINS_ERROR = "GET_ADMINS_ERROR";
export const GET_STATISTICS_SUCCESS = "GET_STATISTICS_SUCCESS";
export const GET_STATISTICS_ERROR = "GET_STATISTICS_ERROR";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_ERROR = "USER_REGISTER_ERROR";
export const GET_AGE_CHART_SUCCESS = "GET_AGE_CHART_SUCCESS";
export const GET_FUNCTION_CHART_SUCCESS = "GET_FUNCTION_CHART_SUCCESS";
export const GET_COUNTRY_CHART_SUCCESS = "GET_COUNTRY_CHART_SUCCESS";
export const GET_AGE_CHART_ERROR = "GET_AGE_CHART_ERROR";
export const GET_FUNCTION_CHART_ERROR = "GET_FUNCTION_CHART_ERROR";
export const GET_COUNTRY_CHART_ERROR = "GET_COUNTRY_CHART_ERROR";
export const USER_UPDATE_SUCCESS = "USER_UPDATE_SUCCESS";
export const USER_UPDATE_ERROR = "USER_UPDATE_ERROR";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_ERROR = "DELETE_USER_ERROR";
const apiClient = axiosWrapper();

export const userLoginSuccess = (user) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: user,
  };
};

export const userLoginError = (error) => {
  return {
    type: USER_LOGIN_ERROR,
    error: error,
  };
};

export const getUsersSuccess = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: users,
  };
};

export const getUsersError = (error) => {
  return {
    type: GET_USERS_ERROR,
    error: error,
  };
};

export const getAdminsSuccess = (users) => {
  return {
    type: GET_ADMINS_SUCCESS,
    payload: users,
  };
};

export const getAdminsError = (error) => {
  return {
    type: GET_ADMINS_ERROR,
    error: error,
  };
};

export const getAgeChartSuccess = (users) => {
  return {
    type: GET_AGE_CHART_SUCCESS,
    payload: users,
  };
};

export const getAgeChartError = (error) => {
  return {
    type: GET_AGE_CHART_ERROR,
    error: error,
  };
};
export const getFunctionChartSuccess = (users) => {
  return {
    type: GET_FUNCTION_CHART_SUCCESS,
    payload: users,
  };
};

export const getFunctionChartError = (error) => {
  return {
    type: GET_FUNCTION_CHART_ERROR,
    error: error,
  };
};
export const getCountryChartSuccess = (users) => {
  return {
    type: GET_COUNTRY_CHART_SUCCESS,
    payload: users,
  };
};

export const getCountryChartError = (error) => {
  return {
    type: GET_COUNTRY_CHART_ERROR,
    error: error,
  };
};

export const getStatisticsSuccess = (users) => {
  return {
    type: GET_STATISTICS_SUCCESS,
    payload: users,
  };
};

export const getStatisticsError = (error) => {
  return {
    type: GET_STATISTICS_ERROR,
    error: error,
  };
};

export const userRegisterSuccess = (user) => {
  return {
    type: USER_REGISTER_SUCCESS,
    payload: user,
  };
};

export const userRegisterError = (error) => {
  return {
    type: USER_REGISTER_ERROR,
    error: error,
  };
};

export const userUpdateSuccess = (user) => {
  return {
    type: USER_UPDATE_SUCCESS,
    payload: user,
  };
};

export const userUpdateError = (error) => {
  return {
    type: USER_UPDATE_ERROR,
    error: error,
  };
};

export const getUserSuccess = (user) => {
  return {
    type: GET_USER_SUCCESS,
    payload: user,
  };
};

export const getUserError = (error) => {
  return {
    type: GET_USER_ERROR,
    error: error,
  };
};

export const deleteUserSuccess = () => {
  return {
    type: DELETE_USER_SUCCESS,
  };
};

export const deleteUserError = (error) => {
  return {
    type: DELETE_USER_ERROR,
    error: error,
  };
};

export const login = (user) => {
  return (dispatch) => {
    return apiClient
      .post("user/login", user)
      .then((response) => {
        dispatch(userLoginSuccess(response.data.userModel));
        storeToken(user.rememberMe, response.data.token);
        toastr.success("Login", "Logged in succesfully");
        window.location = "/";
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(userLoginError(error));
        throw error;
      });
  };
};

export const getAdmins = () => {
  return (dispatch) => {
    return apiClient
      .get("user/admins")
      .then((response) => {
        dispatch(getAdminsSuccess(response.data));
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(getAdminsError(error));
        throw error;
      });
  };
};

export const getStatistics = () => {
  return (dispatch) => {
    return apiClient
      .get("user/statistics")
      .then((response) => {
        dispatch(getStatisticsSuccess(response.data));
        toastr.success("Employees", "Statistics fetched");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(getStatisticsError(error));
        throw error;
      });
  };
};

export const silentLogin = () => {
  return (dispatch) => {
    return apiClient
      .post("user/silentLogin")
      .then((response) => {
        dispatch(userLoginSuccess(response.data.userModel));
        toastr.success("Login", "Logged in succesfully");
        return response.data.userModel;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(userLoginError(error));
        throw error;
      });
  };
};

export const registerUser = (userModel, history) => {
  return (dispatch) => {
    return apiClient
      .post("user/register", userModel)
      .then((response) => {
        dispatch(userRegisterSuccess(response.data));
        toastr.success("Register", "User registered");
        history.push("/employees");
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(userRegisterError(error));
        throw error;
      });
  };
};

export const updateUser = (userModel, history) => {
  return (dispatch) => {
    return apiClient
      .put("user/update", userModel)
      .then((response) => {
        dispatch(userUpdateSuccess(response.data));
        toastr.success("Update", "User updated");
        history.push("/employees");
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(userUpdateError(error));
        throw error;
      });
  };
};

export const getUsers = () => {
  return (dispatch) => {
    return apiClient
      .get("user/users")
      .then((response) => {
        dispatch(getUsersSuccess(response.data));
        toastr.success("Employees", "Users fetched");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(getUsersError(error));
        throw error;
      });
  };
};

export const getUser = (userId) => {
  return (dispatch) => {
    return apiClient
      .get(`user/${userId}`)
      .then((response) => {
        dispatch(getUserSuccess(response.data));
        toastr.success("Employee", "User fetched");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(getUserError(error));
        throw error;
      });
  };
};
export const deleteUser = (userId) => {
  return (dispatch) => {
    return apiClient
      .post(`user/deleteUser/${userId}`)
      .then(() => {
        dispatch(deleteUserSuccess());
        toastr.success("Employee", "User deleted");
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(deleteUserError(error));
        throw error;
      });
  };
};

export const getAgeChart = () => {
  return (dispatch) => {
    return apiClient
      .get("user/getAgeChart")
      .then((response) => {
        dispatch(getAgeChartSuccess(response.data));
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(getAgeChartError(error));
        throw error;
      });
  };
};
export const getFunctionChart = () => {
  return (dispatch) => {
    return apiClient
      .get("user/getFunctionChart")
      .then((response) => {
        dispatch(getFunctionChartSuccess(response.data));
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(getFunctionChartError(error));
        throw error;
      });
  };
};
export const getCountryChart = () => {
  return (dispatch) => {
    return apiClient
      .get("user/getCountryChart")
      .then((response) => {
        dispatch(getCountryChartSuccess(response.data));
        toastr.success("Chart", "Charts fetched");
        return response.data;
      })
      .catch((error) => {
        if (error.response !== undefined) {
          toastr.error("Error", error.response.data.Message);
        }
        dispatch(getCountryChartError(error));
        throw error;
      });
  };
};
