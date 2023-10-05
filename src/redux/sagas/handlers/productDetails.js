import { call, put, delay } from 'redux-saga/effects';
import {  requestGetProduct, requestUpdateProduct } from '../requests/productDetails';
import { setUser, updateBookList, } from '../../actions/index';



export function* getBookList() {

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
      yield put(updateBookList(response.data.data))
    }


  } catch (error) {
    console.error('this is error', error)
  }
}




