import { actionType } from "../../constants/interfaces/actionType";
import { userData } from "../../constants/interfaces/userData";
import { RECEIVE_PEER_DATA } from "./actionTypes";

export const receive_peer_data = (payload:userData):actionType => ({
  type: RECEIVE_PEER_DATA,
  payload: payload,
});
  