import {
  GET_DAYSOFF_ERROR,
  GET_DAYSOFF_SUCCESS,
  GET_HOLIDAY_CALENDAR_SUCCESS,
  GET_HOLIDAY_CALENDAR_ERROR,
  UPDATE_DAYOFF_SUCCESS,
  UPDATE_DAYOFF_ERROR,
  DELETE_DAYOFF_SUCCESS,
  DELETE_DAYOFF_ERROR,
  ADD_DAYOFF_SUCCESS,
  ADD_DAYOFF_ERROR,
  GET_USER_DAYOFFS_SUCCESS,
  GET_USER_DAYOFFS_ERROR,
  GET_DAYOFF_CHART_DATA_SUCCESS,
  GET_DAYOFF_CHART_DATA_ERROR,
} from "../actions/dayoffActions";
import { initialState } from "../selectors/dayoffSelector";

export const dayoffReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DAYSOFF_SUCCESS:
      return { ...state, daysoff: action.payload, error: null };
    case GET_DAYSOFF_ERROR:
      return { ...state, error: action.payload };
    case GET_HOLIDAY_CALENDAR_SUCCESS:
      return { ...state, holidayCalendar: action.payload, error: null };
    case GET_HOLIDAY_CALENDAR_ERROR:
      return { ...state, error: action.payload };
    case UPDATE_DAYOFF_SUCCESS:
      return { ...state, error: null };
    case UPDATE_DAYOFF_ERROR:
      return { ...state, error: action.payload };
    case DELETE_DAYOFF_SUCCESS:
      return { ...state, error: null };
    case DELETE_DAYOFF_ERROR:
      return { ...state, error: action.payload };
    case GET_USER_DAYOFFS_SUCCESS:
      return { ...state, daysoff: action.payload, error: null };
    case GET_USER_DAYOFFS_ERROR:
      return { ...state, error: action.payload };
    case GET_DAYOFF_CHART_DATA_SUCCESS:
      return { ...state, chartData: action.payload, error: null };
    case GET_DAYOFF_CHART_DATA_ERROR:
      return { ...state, error: action.payload };
    case ADD_DAYOFF_SUCCESS:
      return { ...state, dayoffModel: action.payload, error: null };
    case ADD_DAYOFF_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default dayoffReducer;
