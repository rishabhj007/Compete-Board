import { actionType } from "../../constants/interfaces/actionType"
import { RECEIVE_PEER_DATA } from "./actionTypes"

const initialState = {}

export const reducer = (state = initialState, action: actionType) => {
    if (action.type === RECEIVE_PEER_DATA) {
      return state
    }
    else{
      return {}
    }
  }