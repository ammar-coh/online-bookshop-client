import axios from "axios";
const url = process.env.REACT_APP_BASE_URL
export function requestGetRoomChat(data) {
  return axios.request({
    method: "get",
    url: `${url}chat/users-chatRoom`,
    params: { roomID: data },
    headers: {
      Authorization: `${localStorage.getItem("authorization")}`,
    },
  });
}

export function requestCreateChatRoom(data) {
  console.log("data", data);
  return axios.request({
    method: "post",
    url: `${url}chat/users-chatRoom`,
    data: {
      roomID: data.roomID,
      participant: data.participant,
      participant_2: data.receiver,
    },
    headers: {
      Authorization: `${localStorage.getItem("authorization")}`,
    },
  });
}
