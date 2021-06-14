import {
  GET_MEETINGS_ERROR,
  GET_MEETINGS_SUCCESS,
  ADD_MEETING_SUCCESS,
  ADD_MEETING_ERROR,
  UPDATE_MEETING_SUCCESS,
  UPDATE_MEETING_ERROR,
  DELETE_MEETING_SUCCESS,
  DELETE_MEETING_ERROR,
  GET_MEETINGS_BETWEEN_DATES_SUCCESS,
  GET_MEETINGS_BETWEEN_DATES_ERROR,
} from "../actions/meetingActions";
import { initialState } from "../selectors/meetingSelector";

export const meetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEETINGS_SUCCESS:
      return { ...state, meetings: action.payload, error: null };
    case GET_MEETINGS_ERROR:
      return { ...state, error: action.payload };
    case GET_MEETINGS_BETWEEN_DATES_SUCCESS:
      return { ...state, meetings: action.payload, error: null };
    case GET_MEETINGS_BETWEEN_DATES_ERROR:
      return { ...state, error: action.payload };
    case ADD_MEETING_SUCCESS:
      return { ...state, functionModel: action.payload, error: null };
    case ADD_MEETING_ERROR:
      return { ...state, error: action.payload };
    case UPDATE_MEETING_SUCCESS:
      return { ...state, error: null };
    case UPDATE_MEETING_ERROR:
      return { ...state, error: action.payload };
    case DELETE_MEETING_SUCCESS:
      return { ...state, error: null };
    case DELETE_MEETING_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default meetingReducer;
