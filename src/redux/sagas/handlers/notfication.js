import { call, put } from "redux-saga/effects";
import { notificationDB } from "../../actions/index";
import { requestGetMyNotifications } from "../requests/notification";


export function* handleGetMyNotifications(action) {
    console.log("getting my notifications from database", action.data )
    try {
        const response = yield call(requestGetMyNotifications, action.data);
        const { data } = response;
        console.log("response_my_notification", data)
        if (data.status == true) {
            yield put( notificationDB(data.data));
        }
    } catch (error) {
        console.log(error);
    }
}

