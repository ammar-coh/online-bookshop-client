import { call, put, delay } from 'redux-saga/effects';
import { requestDestroyProduct, requestGetProduct, requestUpdateProduct, requestCreateProduct } from '../requests/productDetails';
import { setUser, updateUserDetails, deleteDetails, addToReducer } from '../../actions/index';



export function* handleGetUser() {

  try {
    const response = yield call(requestGetProduct);
    const { data } = response


    yield put(setUser(data))
  } catch (error) {
    console.log(error)
  }
}



export function* updateInfo(action) {

  try {
    const response = yield call(requestUpdateProduct, action.data);
    if (response.data.error == 'unable to update product') {
      alert("authorized personnel only")
    }
    else {
      yield put(updateUserDetails(response.data.data))
    }


  } catch (error) {
    console.error('this is error', error)
  }
}

export function* deleteInfo(action) {

  try {
    const response = yield call(requestDestroyProduct, action.data)
    console.log(response.data, "respon")
    if (response.data == "nothing") {
      alert("authorized personnel only")
    } else {
      yield put(deleteDetails(response.data))
    }

  } catch (error) {

  }
}

export function* addItemInfo(action) {

  try {
    const response = yield call(requestCreateProduct, action.data);
    yield put(addToReducer(response.data))
  } catch (error) {

  }
}
