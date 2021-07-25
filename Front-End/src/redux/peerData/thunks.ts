import { Action, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { userData } from "../../constants/interfaces/userData";
import { userType } from "../../constants/interfaces/userType";
import { list } from "../../constants/PeerList";
import * as data from "../../constants/request.json";
import { receive_peer_data } from "./actions";

const fetchPeerDetailsThunk = () => {
  const URL = "https://leetcode.com/graphql"
  return (dispatch: Dispatch<Action>) => {
    list.forEach((element) => {
      let user: userType = {
        username: element,
      };
      axios.post(URL, {
          ...data,
          variables: user,
        }).then((response)=>{
          dispatch(
            receive_peer_data(mapRecievedDataToUsefulData(response.data))
          );
    });
      });
  };
};

function mapRecievedDataToUsefulData(response: any): userData {
  const userData: userData = {
    easy: response.data.matchedUser.submitStats.acSubmissionNum.filter(
      (element: { difficulty: string; }) => element.difficulty === "Easy"
    ).count,
    medium: response.data.matchedUser.submitStats.acSubmissionNum.filter(
      (element: { difficulty: string; }) => element.difficulty === "Medium"
    ).count,
    hard: response.data.matchedUser.submitStats.acSubmissionNum.filter(
      (element: { difficulty: string; }) => element.difficulty === "Hard"
    ).count,
    name: response.data.matchedUser.username,
    score: 0,
  };
  userData.score = userData.easy + userData.medium * 3 + userData.hard * 7;
  return userData;
}

export default fetchPeerDetailsThunk;
