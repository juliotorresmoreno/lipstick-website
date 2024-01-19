import { combineReducers } from "redux";
import authReducer, { AuthState } from "./auth";
import appReducer, { AppState } from "./app";

const reducers = combineReducers({
  app: appReducer,
  auth: authReducer,
});

export interface RootState {
  app: AppState;
  auth: AuthState;
}

export default reducers;
