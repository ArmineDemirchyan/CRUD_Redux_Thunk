import { combineReducers } from "redux";
import usersReducers from "./reducer.js";

const rootReducers = combineReducers({
    data: usersReducers,
});

export default rootReducers;