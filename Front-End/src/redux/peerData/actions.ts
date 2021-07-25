import { actionType } from "../../constants/interfaces/actionType";
import { RECEIVE_PEER_DATA } from "./actionTypes";

export const receive_peer_data = (payload:any):actionType => ({
  type: RECEIVE_PEER_DATA,
  payload: payload,
});
  