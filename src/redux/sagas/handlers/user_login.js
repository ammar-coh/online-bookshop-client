import { call, put, delay } from "redux-saga/effects";
import { requestPostSign_In, requestPostSign_Up, requestPostSign_Out } from "../requests/user_login";
import { sign_in_reducer, sign_in_error_message, sign_out_reducer } from "../../actions/index";
import { socket } from "../../../socket";

export function* postSign_Up(action) {

  const { setError } = action.data
  if (action.data.password.length >= 8) {
    try {
      const response = yield call(requestPostSign_Up, action.data);

      if (response.data.confirm == "registered") {
        action.data.history.push("/login_page");
      }
    } catch (error) {
      console.log(error.response.data.message);
      if (error.response.status == 400) {
        setError("userName", { type: "custom", message: error.response.data.message })

      }
    }
  } else {
    alert("minimum length required");
  }
}
export function* postSign_In(action) {
  try {
    const { setLoader } = action.data
    setLoader(true)
    const response = yield call(requestPostSign_In, action.data);
    const { data } = response;
    socket.emit("setUserId", { userId: data.user.id });
    socket.emit('join_login_room', {
      user: data?.user?.userName,
      id: data?.user?.id
    });
    localStorage.setItem("for_reducer", JSON.stringify(response.data));
    localStorage.setItem("userInfo", JSON.stringify(response.data.user));
    localStorage.setItem("authorization", response.data.token);
    yield put(sign_in_reducer(data));
    if (data.status) {
      action.data.history.push("/");
    }
    if (response.status == 200) {
      setLoader(false)
    }
  } catch (error) {
    console.log(error.response.data);
    if (!error.response.data.status) {
      yield put(sign_in_error_message(error.response.data));
    }
  }
}
export function* postSign_Out(action) {
  try {
    const response = yield call(requestPostSign_Out, action.data.user.id);
    const { data } = response
    socket.emit('leave_login_room', {
      user: data?.user?.userName,
      id: data?.user?.id
    });
    yield put(sign_out_reducer(response.data))
  } catch (error) {
    console.log(error.response.data);
  }
}
export function* getSign_In(action) {
  try {
    yield put(sign_in_reducer(action.data));
  } catch (error) {
    console.log(error);
  }
}
