import axiosWrapper from "../../api/axiosWrapper";
import { storeToken } from "../../services/storage";
import { toastr } from "react-redux-toastr";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_ERROR = "USER_REGISTER_ERROR";

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
