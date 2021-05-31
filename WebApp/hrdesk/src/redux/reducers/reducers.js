import { combineReducers } from "redux";
import userReducer from "./userReducer";
import { reducer as toastrReducer } from "react-redux-toastr";

export default combineReducers({
  userReducer,
  toastr: toastrReducer,
});
