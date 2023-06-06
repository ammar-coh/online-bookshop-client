import axios from "axios";

export function requestGetMyNotifications(data) {
  return axios.request({
    method: "get",
    url: `http://localhost:8081/notification/users-notification`,
    params: { id: data },
    headers: {
      Authorization: `${localStorage.getItem("authorization")}`,
    },
  });
}


