import { combineReducers, createStore, applyMiddleware } from "redux";
import forecastReducer from "./forecast/forecastReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(
  combineReducers({ forecasts: forecastReducer }),
  {},
  applyMiddleware(thunk, logger)
);

export default store;
