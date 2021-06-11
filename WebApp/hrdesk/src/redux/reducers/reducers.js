import { combineReducers } from "redux";
import userReducer from "./userReducer";
import officeReducer from "./officeReducer";
import functionReducer from "./functionReducer";
import teamReducer from "./teamReducer";
import meetingRoomReducer from "./meetingRoomReducer";
import { reducer as toastrReducer } from "react-redux-toastr";

export default combineReducers({
  userReducer,
  officeReducer,
  functionReducer,
  teamReducer,
  meetingRoomReducer,
  toastr: toastrReducer,
});
