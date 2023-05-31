import { call, put, delay } from "redux-saga/effects";
import {
  requestDestroyProduct,
  requestGetProduct,
  requestUpdateProduct,
  requestCreateProduct,
} from "../requests/productDetails";
import { chatFromDB } from "../../actions/index";
import { requestGetRoomChat, requestCreateChatRoom } from "../requests/chat";

export function* handleCreateChatRoom(action) {
  try {
    const response = yield call(requestCreateChatRoom, action.data);
    const { data } = response;
    yield put(chatFromDB(data));
  } catch (error) {
    console.log(error);
  }
}
export function* handleGetChatFromDB(action) {
  try {
    const response = yield call(requestGetRoomChat, action.data.roomID);
    const { data } = response;
    if (data.status == true) {
      yield put(chatFromDB(data));
    } else if (data.status == false) {
        const responseCreateChatRoom = yield call(requestCreateChatRoom, action.data);
    const { data } = responseCreateChatRoom;

    yield put(chatFromDB(data));
    }
  } catch (error) {
    console.log(error);
  }
}

//console.log(handleGetUser)
