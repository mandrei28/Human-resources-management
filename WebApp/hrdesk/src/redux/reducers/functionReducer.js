import {
  GET_FUNCTIONS_ERROR,
  GET_FUNCTIONS_SUCCESS,
  ADD_FUNCTION_SUCCESS,
  ADD_FUNCTION_ERROR,
  UPDATE_FUNCTION_SUCCESS,
  UPDATE_FUNCTION_ERROR,
  DELETE_FUNCTION_SUCCESS,
  DELETE_FUNCTION_ERROR,
} from "../actions/functionActions";
import { initialState } from "../selectors/functionSelector";

export const functionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FUNCTIONS_SUCCESS:
      return { ...state, functions: action.payload, error: null };
    case GET_FUNCTIONS_ERROR:
      return { ...state, error: action.payload };
    case ADD_FUNCTION_SUCCESS:
      return { ...state, functionModel: action.payload, error: null };
    case ADD_FUNCTION_ERROR:
      return { ...state, error: action.payload };
    case UPDATE_FUNCTION_SUCCESS:
      return { ...state, error: null };
    case UPDATE_FUNCTION_ERROR:
      return { ...state, error: action.payload };
    case DELETE_FUNCTION_SUCCESS:
      return { ...state, error: null };
    case DELETE_FUNCTION_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default functionReducer;
