import { Action } from "@reduxjs/toolkit";
import { authSetSession } from "../actions/actionTypes";
import { Session } from "@/types/models";

export type AuthState = {
  session: Session | null;
};

const initialState: AuthState = {
  session: null,
};

type Actions = Action<typeof authSetSession> & { payload: Session };

export default function authReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case "@auth/setSession":
      state.session = action.payload;
  }
  return state;
}
