import { combineReducers } from "redux";
import { changedMyMind } from "./changedMyMind";
import { checkoutreducer } from "./checkoutReducer";
import { productDetails } from "./productDetails.js";
import {chat} from './chat'
import {user_login} from './user_login'

const reducer = combineReducers({
  checkout: checkoutreducer,
  changedMyMind: changedMyMind,
  productDetails: productDetails,
  user_login:user_login,
  chat:chat
});
//console.log(reducer);
export default reducer;
