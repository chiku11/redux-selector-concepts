import { UPDATE_FIELD_STATE } from "../constants/action-types";
export function updateField(payload) {
  return { type: UPDATE_FIELD_STATE, payload };
}