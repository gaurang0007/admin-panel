import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { userReducer } from "./Reducers/UserReducer";

const store = createStore(userReducer, applyMiddleware(logger));

export default store;
