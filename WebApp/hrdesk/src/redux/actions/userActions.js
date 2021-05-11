import axiosWrapper from "../../api/axiosWrapper";
import { storeToken } from "../../services/storage";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";

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

export const login = (user) => {
  return (dispatch) => {
    return apiClient
      .post("user/login", user)
      .then((response) => {
        dispatch(userLoginSuccess(response.data.userModel));
        storeToken(user.rememberMe, response.data.token);
        window.location = "/";
      })
      .catch((error) => {
        dispatch(userLoginError(error));
        throw error;
      });
  };
};
