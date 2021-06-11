import {
  GET_NATIONALDAYS_ERROR,
  GET_NATIONALDAYS_SUCCESS,
  ADD_NATIONALDAY_SUCCESS,
  ADD_NATIONALDAY_ERROR,
  UPDATE_NATIONALDAY_SUCCESS,
  UPDATE_NATIONALDAY_ERROR,
  DELETE_NATIONALDAY_SUCCESS,
  DELETE_NATIONALDAY_ERROR,
} from "../actions/nationalDayActions";
import { initialState } from "../selectors/nationalDaySelector";

export const nationalDayReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NATIONALDAYS_SUCCESS:
      return { ...state, nationalDays: action.payload, error: null };
    case GET_NATIONALDAYS_ERROR:
      return { ...state, error: action.payload };
    case ADD_NATIONALDAY_SUCCESS:
      return { ...state, nationalDay: action.payload, error: null };
    case ADD_NATIONALDAY_ERROR:
      return { ...state, error: action.payload };
    case UPDATE_NATIONALDAY_SUCCESS:
      return { ...state, error: null };
    case UPDATE_NATIONALDAY_ERROR:
      return { ...state, error: action.payload };
    case DELETE_NATIONALDAY_SUCCESS:
      return { ...state, error: null };
    case DELETE_NATIONALDAY_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default nationalDayReducer;
