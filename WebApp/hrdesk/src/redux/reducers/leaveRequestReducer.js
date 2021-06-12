import {
  GET_LEAVEREQUESTS_ERROR,
  GET_LEAVEREQUESTS_SUCCESS,
  UPDATE_LEAVEREQUEST_SUCCESS,
  UPDATE_LEAVEREQUEST_ERROR,
  DELETE_LEAVEREQUEST_SUCCESS,
  DELETE_LEAVEREQUEST_ERROR,
} from "../actions/leaveRequestActions";
import { initialState } from "../selectors/leaveRequestSelector";

export const leaveRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LEAVEREQUESTS_SUCCESS:
      return { ...state, leaveRequests: action.payload, error: null };
    case GET_LEAVEREQUESTS_ERROR:
      return { ...state, error: action.payload };
    case UPDATE_LEAVEREQUEST_SUCCESS:
      return { ...state, error: null };
    case UPDATE_LEAVEREQUEST_ERROR:
      return { ...state, error: action.payload };
    case DELETE_LEAVEREQUEST_SUCCESS:
      return { ...state, error: null };
    case DELETE_LEAVEREQUEST_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default leaveRequestReducer;
