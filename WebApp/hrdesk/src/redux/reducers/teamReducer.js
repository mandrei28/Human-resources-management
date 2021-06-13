import {
  GET_TEAMS_ERROR,
  GET_TEAMS_SUCCESS,
  GET_BOOKING_TEAMS_ERROR,
  GET_BOOKING_TEAMS_SUCCESS,
  ADD_TEAM_SUCCESS,
  ADD_TEAM_ERROR,
  UPDATE_TEAM_SUCCESS,
  UPDATE_TEAM_ERROR,
  DELETE_TEAM_SUCCESS,
  DELETE_TEAM_ERROR,
} from "../actions/teamActions";
import { initialState } from "../selectors/teamSelector";

export const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEAMS_SUCCESS:
      return { ...state, teams: action.payload, error: null };
    case GET_TEAMS_ERROR:
      return { ...state, error: action.payload };
    case GET_BOOKING_TEAMS_SUCCESS:
      return { ...state, bookingTeams: action.payload, error: null };
    case GET_BOOKING_TEAMS_ERROR:
      return { ...state, error: action.payload };
    case ADD_TEAM_SUCCESS:
      return { ...state, functionModel: action.payload, error: null };
    case ADD_TEAM_ERROR:
      return { ...state, error: action.payload };
    case UPDATE_TEAM_SUCCESS:
      return { ...state, error: null };
    case UPDATE_TEAM_ERROR:
      return { ...state, error: action.payload };
    case DELETE_TEAM_SUCCESS:
      return { ...state, error: null };
    case DELETE_TEAM_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default teamReducer;
