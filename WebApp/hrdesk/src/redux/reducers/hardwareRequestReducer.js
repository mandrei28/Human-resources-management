import {
  GET_HARDWAREREQUESTS_ERROR,
  GET_HARDWAREREQUESTS_SUCCESS,
  ADD_HARDWAREREQUEST_SUCCESS,
  ADD_HARDWAREREQUEST_ERROR,
  GET_USER_HARDWAREREQUESTS_SUCCESS,
  GET_USER_HARDWAREREQUESTS_ERROR,
  DELETE_HARDWAREREQUEST_SUCCESS,
  DELETE_HARDWAREREQUEST_ERROR,
} from "../actions/hardwareRequestActions";
import { initialState } from "../selectors/hardwareRequestSelector";

export const hardwareRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HARDWAREREQUESTS_SUCCESS:
      return { ...state, hardwareRequests: action.payload, error: null };
    case GET_HARDWAREREQUESTS_ERROR:
      return { ...state, error: action.payload };
    case GET_USER_HARDWAREREQUESTS_SUCCESS:
      return { ...state, hardwareRequests: action.payload, error: null };
    case GET_USER_HARDWAREREQUESTS_ERROR:
      return { ...state, error: action.payload };
    case ADD_HARDWAREREQUEST_SUCCESS:
      return { ...state, hardwareRequestModel: action.payload, error: null };
    case ADD_HARDWAREREQUEST_ERROR:
      return { ...state, error: action.payload };
    case DELETE_HARDWAREREQUEST_SUCCESS:
      return { ...state, error: null };
    case DELETE_HARDWAREREQUEST_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default hardwareRequestReducer;
