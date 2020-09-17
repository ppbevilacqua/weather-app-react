import { combineReducers, createStore, applyMiddleware } from "redux";
import forecastReducer from "./forecast/forecastReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  combineReducers({ forecasts: forecastReducer }),
  {},
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
