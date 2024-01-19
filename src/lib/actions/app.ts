import { Config } from "@/types/models";
import { appSetConfig } from "./actionTypes";

export function setConfig(payload: Config) {
  return {
    type: appSetConfig,
    payload,
  };
}
