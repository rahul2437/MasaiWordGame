import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "./app/reducer";

// const rootReducer = combineReducers(AppReducer);

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = legacy_createStore(
  AppReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
