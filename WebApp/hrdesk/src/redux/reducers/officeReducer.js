import {
  GET_OFFICES_ERROR,
  GET_OFFICES_SUCCESS,
  ADD_OFFICE_SUCCESS,
  ADD_OFFICE_ERROR,
  UPDATE_OFFICE_SUCCESS,
  UPDATE_OFFICE_ERROR,
  DELETE_OFFICE_SUCCESS,
  DELETE_OFFICE_ERROR,
} from "../actions/officeActions";
import { initialState } from "../selectors/officeSelector";

export const officeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_OFFICES_SUCCESS:
      return { ...state, offices: action.payload, error: null };
    case GET_OFFICES_ERROR:
      return { ...state, error: action.payload };
    case ADD_OFFICE_SUCCESS:
      return { ...state, office: action.payload, error: null };
    case ADD_OFFICE_ERROR:
      return { ...state, error: action.payload };
    case UPDATE_OFFICE_SUCCESS:
      return { ...state, error: null };
    case UPDATE_OFFICE_ERROR:
      return { ...state, error: action.payload };
    case DELETE_OFFICE_SUCCESS:
      return { ...state, error: null };
    case DELETE_OFFICE_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default officeReducer;
