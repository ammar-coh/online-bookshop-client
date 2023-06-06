import { call, put } from "redux-saga/effects";
import { notificationDB } from "../../actions/index";
import { requestGetMyNotifications } from "../requests/notification";


export function* handleGetMyNotifications(action) {
    try {
        const response = yield call(requestGetMyNotifications, action.data);
        const { data } = response;
        if (data.status == true) {
            yield put( notificationDB(data.data));
        }
    } catch (error) {
        console.log(error);
    }
}

