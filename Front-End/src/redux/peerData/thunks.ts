import { Action, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { userData } from "../../constants/interfaces/userData";
import { list } from "../../constants/PeerList";
import * as data from "../../constants/request.json";
import { receive_peer_data } from "./actions";

const fetchPeerDetailsThunk = () => {
  const URL = "https://thingproxy.freeboard.io/fetch/https://leetcode.com/graphql";
  return function (dispatch: Dispatch<Action>): void {
    list.forEach((element) => {
      const requestData = JSON.parse(JSON.stringify(data)).default;
      requestData.variables = { username: element };
      axios
        .post(URL, requestData)
        .then((response) => {
          dispatch(
            receive_peer_data(mapRecievedDataToUsefulData(JSON.parse(JSON.stringify(response.data))))
          );
        });
    });
    return;
  };
};

function mapRecievedDataToUsefulData(response: any): userData {
  console.log(response.data.matchedUser)
  const userData: userData = {
    easy: response.data.matchedUser.submitStats.acSubmissionNum[1].count,
    medium: response.data.matchedUser.submitStats.acSubmissionNum[2].count,
    hard: response.data.matchedUser.submitStats.acSubmissionNum[3].count,
    name: response.data.matchedUser.username,
    score: 0,
  };
  userData.score = userData.easy + userData.medium * 3 + userData.hard * 7;
  return userData;
}

export default fetchPeerDetailsThunk;
