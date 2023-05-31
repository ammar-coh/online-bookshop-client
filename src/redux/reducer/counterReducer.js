
 const initialstate= {
     count:0
 }
export const counter=(state=initialstate, actions)=>{
            switch(actions.type){
                case 'increment' :
                    return{
                        ...state, count:state.count +1
                    }
                default:
                    return state
                }
            }
