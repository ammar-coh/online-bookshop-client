import axios from "axios";

export function requestGetRoomChat(data) {
  return axios.request({
    method: "get",
    url: `http://localhost:8081/chat/users-chatRoom`,
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
    url: `http://localhost:8081/chat/users-chatRoom`,
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
