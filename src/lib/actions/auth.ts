import { Session } from "@/types/models";
import { authSetSession } from "./actionTypes";

export function setSession(payload: Session | null) {
  return {
    type: authSetSession,
    payload,
  };
}
