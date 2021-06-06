import { GET_TEAMS_ERROR, GET_TEAMS_SUCCESS } from "../actions/teamActions";
import { initialState } from "../selectors/teamSelector";

export const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEAMS_SUCCESS:
      return { ...state, teams: action.payload, error: null };
    case GET_TEAMS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default teamReducer;
