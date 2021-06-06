import { combineReducers } from "redux";
import userReducer from "./userReducer";
import officeReducer from "./officeReducer";
import functionReducer from "./functionReducer";
import teamReducer from "./teamReducer";
import { reducer as toastrReducer } from "react-redux-toastr";

export default combineReducers({
  userReducer,
  officeReducer,
  functionReducer,
  teamReducer,
  toastr: toastrReducer,
});
