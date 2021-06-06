import {
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_ERROR,
  USER_REGISTER_SUCCESS,
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
    default:
      return state;
  }
};

export default userReducer;
