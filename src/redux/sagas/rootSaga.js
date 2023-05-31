import {takeLatest,all} from 'redux-saga/effects';
import {handleGetUser,updateInfo,deleteInfo,addItemInfo} from './handlers/productDetails';
import {postSign_In,postSign_Up,getSign_In} from './handlers/user_login';
import {addProductsToCart,getProductsToCartSaga,deleteProductsFromCart } from './handlers/user_cart';
import {handleGetChatFromDB,handleCreateChatRoom} from './handlers/chatFromDB'

// import {getUser,updateUser} from '../actions/index';
//import {updateUser} from '../actions/index'

 function* watcherSaga(){
  //  yield takeLatest(updateUser,handleGetUser)
    yield takeLatest('get',handleGetUser)
     yield takeLatest('update',updateInfo)
    yield takeLatest('delete',deleteInfo)
    yield takeLatest('add',addItemInfo)
    yield takeLatest('getSign_In', getSign_In)
    yield takeLatest('sign_in_saga', postSign_In)
    yield takeLatest('sign_up_saga', postSign_Up)
   yield takeLatest('getProductsToCartSaga',getProductsToCartSaga)
   yield takeLatest('addToCartSaga',addProductsToCart)
   yield takeLatest('removeFromCartSaga',deleteProductsFromCart)
   yield takeLatest('chatFromDBSaga',handleGetChatFromDB)
   yield takeLatest('createChatRoom',handleCreateChatRoom)

}
export  function* rootSaga() {
  yield all([
    watcherSaga(),
  ])
  // code after all-effect
}