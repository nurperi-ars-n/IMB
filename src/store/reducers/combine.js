import { combineReducers } from "redux";
import { authReducers } from "./auth";
import { rootReducer } from "./index";

export default combineReducers({
    auth:authReducers,
    index:rootReducer
})