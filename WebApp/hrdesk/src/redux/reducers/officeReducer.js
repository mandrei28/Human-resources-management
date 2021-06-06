import {
  GET_OFFICES_ERROR,
  GET_OFFICES_SUCCESS,
} from "../actions/officeActions";
import { initialState } from "../selectors/officeSelector";

export const officeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_OFFICES_SUCCESS:
      return { ...state, offices: action.payload, error: null };
    case GET_OFFICES_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default officeReducer;
