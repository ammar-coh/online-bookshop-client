

const initialState={
    removedItem:[]
}

export const changedMyMind= (state=[],actions)=> {
            switch(actions.type){
                case 'removeFromCart': 
              //  console.log(actions.data)
                
           //console.log('index',index)
           
           
          
         //  console.log(state)
            return[
                ...state,{removedItem:actions.data}]
            case 'addToCart' :
                
            //console.log(actions.data)
           // console.log(state)
                var index = state.findIndex((i)=>{
                    return i.removedItem.delete===actions.data.image
                })
              //  console.log('index',index)
                var modifiedArray= state.splice(index,1)  
                var state=state
                return [
                    ...state
                ]
                
            
        default:
            return state
            }
}