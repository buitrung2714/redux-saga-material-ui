import { combineReducers } from "redux";
import taskReducer from "./task";
import uiReducer from "./ui";
import modalReducer from "./modal";

const rootReducer = combineReducers({
  tasks: taskReducer,
  ui: uiReducer,
  modal: modalReducer,
});

export default rootReducer;
