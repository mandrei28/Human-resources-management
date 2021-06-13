import {
  GET_MEETINGROOMS_ERROR,
  GET_MEETINGROOMS_SUCCESS,
  GET_BOOKING_MEETINGROOMS_ERROR,
  GET_BOOKING_MEETINGROOMS_SUCCESS,
  ADD_MEETINGROOM_SUCCESS,
  ADD_MEETINGROOM_ERROR,
  UPDATE_MEETINGROOM_SUCCESS,
  UPDATE_MEETINGROOM_ERROR,
  DELETE_MEETINGROOM_SUCCESS,
  DELETE_MEETINGROOM_ERROR,
} from "../actions/meetingRoomActions";
import { initialState } from "../selectors/meetingRoomSelector";

export const meetingRoomReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEETINGROOMS_SUCCESS:
      return { ...state, meetingRooms: action.payload, error: null };
    case GET_MEETINGROOMS_ERROR:
      return { ...state, error: action.payload };
    case GET_BOOKING_MEETINGROOMS_SUCCESS:
      return { ...state, bookingMeetingRooms: action.payload, error: null };
    case GET_BOOKING_MEETINGROOMS_ERROR:
      return { ...state, error: action.payload };
    case ADD_MEETINGROOM_SUCCESS:
      return { ...state, meetingRoom: action.payload, error: null };
    case ADD_MEETINGROOM_ERROR:
      return { ...state, error: action.payload };
    case UPDATE_MEETINGROOM_SUCCESS:
      return { ...state, error: null };
    case UPDATE_MEETINGROOM_ERROR:
      return { ...state, error: action.payload };
    case DELETE_MEETINGROOM_SUCCESS:
      return { ...state, error: null };
    case DELETE_MEETINGROOM_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default meetingRoomReducer;
