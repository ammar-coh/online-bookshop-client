import axios from "axios";
const url = process.env.REACT_APP_BASE_URL

export function requestGetMyNotifications(data) {
  return axios.request({
    method: "get",
    url: `${url}notification/users-notification`,
    params: { id: data },
    headers: {
      Authorization: `${localStorage.getItem("authorization")}`,
    },
  });
}


