import {
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_ERROR,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_ERROR,
  USER_UPDATE_SUCCESS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from "../actions/userActions";
import { initialState } from "../selectors/userSelector";

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return { ...state, user: action.payload, error: null };
    case USER_LOGIN_ERROR:
      return { ...state, error: action.payload };
    case USER_REGISTER_SUCCESS:
      return { ...state, error: null };
    case USER_REGISTER_ERROR:
      return { ...state, error: action.payload };
    case USER_UPDATE_SUCCESS:
      return { ...state, error: null };
    case USER_UPDATE_ERROR:
      return { ...state, error: action.payload };
    case GET_USERS_SUCCESS:
      return { ...state, error: null };
    case GET_USERS_ERROR:
      return { ...state, error: action.payload };
    case GET_USER_SUCCESS:
      return { ...state, employee: action.payload, error: null };
    case GET_USER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
