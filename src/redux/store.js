import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducers from "./root-reducer";

const middleware = [reduxThunk];

if(process.env.NODE_ENV === "development") {
    middleware.push(logger);
}

const store = createStore(rootReducers, applyMiddleware(...middleware));

export default store;