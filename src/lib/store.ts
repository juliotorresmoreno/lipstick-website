import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import reducers from "./reducers";

export const makeStore = () => {
  const serializedState =
    typeof window !== "undefined"
      ? localStorage.getItem("reduxState")
      : undefined;

  const preloadedState = serializedState
    ? JSON.parse(serializedState)
    : undefined;

  const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    preloadedState,
  });

  store.subscribe(() => {
    const state = store.getState();
    typeof window !== "undefined" &&
      localStorage.setItem("reduxState", JSON.stringify(state));
  });

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
