import { useDispatch,connect } from "react-redux";
import {addToCartReducer} from './redux/actions';
import Change from './change'


const mapStateToProps=(state)=>({
    cart:state.checkout,
    data:state.changedMyMind
   
})
const mapDispatchToProps=dispatch=>({
returnToCartHandler:data=>dispatch(addToCartReducer(data))

})

export default  connect(mapStateToProps,mapDispatchToProps)(Change) 
