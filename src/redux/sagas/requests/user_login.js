import axios from "axios";

export function requestPostSign_Up(data) {
  return axios.request({
    method: "post",
    url: `http://localhost:8081/users/register`,
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
    url: `http://localhost:8081/users/login`,
    data: { email: data.email, password: data.password },
  });
}

