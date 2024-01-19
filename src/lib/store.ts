import {
  Tuple,
  configureStore,
} from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import reducers from "./reducers";

export const makeStore = () => {
  return configureStore({
    reducer: reducers,
    middleware: () => new Tuple(thunk),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
