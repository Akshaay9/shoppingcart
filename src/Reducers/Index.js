import auth from "./LoginReducers"
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  auth
});
export default rootReducer;