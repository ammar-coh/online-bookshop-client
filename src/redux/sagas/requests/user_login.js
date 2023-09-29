import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;
export function requestPostSign_Up(data) {
  return axios.request({
    method: "post",
    url: `${baseUrl}/users/register`,
    data: {
      email: data.email,
      password: data.password,
      user_name: data.user_name,
    },
  });
}

export function requestPostSign_In(data) {
  return axios.request({
    method: "post",
    url: `${baseUrl}/users/login`,
    data: { email: data.email, password: data.password },
  });
}

export function requestPostSign_Out(userId) {
  return axios.request({
    method: "put",
    url: `${baseUrl}/users/logout/${userId}`,
  });
}

