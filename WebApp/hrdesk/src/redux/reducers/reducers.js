import { combineReducers } from "redux";
import userReducer from "./userReducer";
import officeReducer from "./officeReducer";
import functionReducer from "./functionReducer";
import teamReducer from "./teamReducer";
import meetingRoomReducer from "./meetingRoomReducer";
import dayoffReducer from "./dayoffReducer";
import hardwareRequestReducer from "./hardwareRequestReducer";
import leaveRequestReducer from "./leaveRequestReducer";
import meetingReducer from "./meetingReducer";
import nationalDayReducer from "./nationalDayReducer";
import { reducer as toastrReducer } from "react-redux-toastr";

export default combineReducers({
  userReducer,
  officeReducer,
  functionReducer,
  teamReducer,
  meetingRoomReducer,
  dayoffReducer,
  hardwareRequestReducer,
  leaveRequestReducer,
  meetingReducer,
  nationalDayReducer,
  toastr: toastrReducer,
});
