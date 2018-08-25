import { applyMiddleware, createStore } from "redux";

import combineReducers from "./Reducers";

import logger from "redux-logger";

import thunk from "redux-thunk";

const store = createStore(
  combineReducers /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const middleware = applyMiddleware(thunk, logger);

export default createStore(combineReducers, middleware);
