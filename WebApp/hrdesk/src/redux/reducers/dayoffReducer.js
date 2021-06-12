import {
  GET_DAYSOFF_ERROR,
  GET_DAYSOFF_SUCCESS,
  UPDATE_DAYOFF_SUCCESS,
  UPDATE_DAYOFF_ERROR,
  DELETE_DAYOFF_SUCCESS,
  DELETE_DAYOFF_ERROR,
} from "../actions/dayoffActions";
import { initialState } from "../selectors/dayoffSelector";

export const dayoffReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DAYSOFF_SUCCESS:
      return { ...state, daysoff: action.payload, error: null };
    case GET_DAYSOFF_ERROR:
      return { ...state, error: action.payload };
    case UPDATE_DAYOFF_SUCCESS:
      return { ...state, error: null };
    case UPDATE_DAYOFF_ERROR:
      return { ...state, error: action.payload };
    case DELETE_DAYOFF_SUCCESS:
      return { ...state, error: null };
    case DELETE_DAYOFF_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default dayoffReducer;
