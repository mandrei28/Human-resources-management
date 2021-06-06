import {
  GET_FUNCTIONS_ERROR,
  GET_FUNCTIONS_SUCCESS,
} from "../actions/functionActions";
import { initialState } from "../selectors/functionSelector";

export const functionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FUNCTIONS_SUCCESS:
      return { ...state, functions: action.payload, error: null };
    case GET_FUNCTIONS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default functionReducer;
