import { Session } from "@/types/models";
import { authSetSession } from "./actionTypes";

export function setSession(payload: Session) {
  return {
    type: authSetSession,
    payload,
  };
}
