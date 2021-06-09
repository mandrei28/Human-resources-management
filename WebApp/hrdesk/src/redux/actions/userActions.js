import axiosWrapper from "../../api/axiosWrapper";
import { storeToken } from "../../services/storage";
import { toastr } from "react-redux-toastr";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_ERROR = "USER_REGISTER_ERROR";
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
        toastr.error("Error", error.response.data.Message);
        dispatch(userLoginError(error));
        throw error;
      });
  };
};

export const silentLogin = () => {
  return (dispatch) => {
    return apiClient
      .post("user/silentLogin")
      .then((response) => {
        debugger;
        dispatch(userLoginSuccess(response.data.userModel));
        toastr.success("Login", "Logged in succesfully");
        return response.data.userModel;
      })
      .catch((error) => {
        debugger;
        toastr.error("Error", error.response.data.Message);
        dispatch(userLoginError(error));
        throw error;
      });
  };
};

export const registerUser = (userModel, history) => {
  debugger;
  return (dispatch) => {
    return apiClient
      .post("user/register", userModel)
      .then((response) => {
        dispatch(userRegisterSuccess(response.data));
        toastr.success("Register", "User registered");
        history.push("/employees");
      })
      .catch((error) => {
        toastr.error("Error", error.response.data.Message);
        dispatch(userRegisterError(error));
        throw error;
      });
  };
};

export const updateUser = (userModel, history) => {
  debugger;
  return (dispatch) => {
    return apiClient
      .put("user/update", userModel)
      .then((response) => {
        dispatch(userUpdateSuccess(response.data));
        toastr.success("Update", "User updated");
        history.push("/employees");
      })
      .catch((error) => {
        toastr.error("Error", error.response.data.Message);
        dispatch(userUpdateError(error));
        throw error;
      });
  };
};

export const getUsers = () => {
  debugger;
  return (dispatch) => {
    return apiClient
      .get("user/users")
      .then((response) => {
        dispatch(getUsersSuccess(response.data));
        toastr.success("Employees", "Users fetched");
        return response.data;
      })
      .catch((error) => {
        toastr.error("Error", error.response.data.Message);
        dispatch(getUsersError(error));
        throw error;
      });
  };
};

export const getUser = (userId) => {
  debugger;
  return (dispatch) => {
    return apiClient
      .get(`user/${userId}`)
      .then((response) => {
        dispatch(getUserSuccess(response.data));
        toastr.success("Employee", "User fetched");
        return response.data;
      })
      .catch((error) => {
        toastr.error("Error", error.response.data.Message);
        dispatch(getUserError(error));
        throw error;
      });
  };
};
export const deleteUser = (userId) => {
  debugger;
  return (dispatch) => {
    return apiClient
      .post(`user/deleteUser/${userId}`)
      .then(() => {
        dispatch(deleteUserSuccess());
        toastr.success("Employee", "User deleted");
      })
      .catch((error) => {
        toastr.error("Error", error.response.data.Message);
        dispatch(deleteUserError(error));
        throw error;
      });
  };
};
