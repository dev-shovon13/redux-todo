import { combineReducers } from "redux";
import todoReducer from "./todos";

const allReducer = combineReducers({
  todo: todoReducer,
});
export default allReducer;
