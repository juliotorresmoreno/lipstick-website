import { Action } from "@reduxjs/toolkit";
import { appSetConfig } from "../actions/actionTypes";
import { Config } from "@/types/models";

export type AppState = Config | null;

const initialState: AppState = null;

type Actions = Action<typeof appSetConfig> & { payload: Config };

export default function appReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case "@app/setConfig":
      state = action.payload;
  }
  return state;
}
