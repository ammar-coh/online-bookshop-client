

export const increment =() =>{
    return {
        type: 'increment', 
        
    };
}

export const chat =(data) =>{
    return {
        type: 'receive', 
        data:data
    };
}
export const chatFromDBSaga =(data) =>{
    return {
        type: 'chatFromDBSaga', 
        data:data
    };
}
export const clearChat = ()=>{
    return {
        type: 'clearChatRoom', 
    };
}

export const createChatRoom =(data) =>{
    return {
        type: 'createChatRoom', 
        data:data
    };
}
export const chatFromDB =(data) =>{
    return {
        type: 'chat from DB', 
        data:data
    };
}

export const notification =(data) =>{
    return {
        type: 'notification_receive', 
        data:data
    };
}

export const notificationDB =(data) =>{
    return {
        type: 'notificationDB', 
        data:data
    };
}
export const notification_clear =(data) =>{
    return {
        type: 'clearNotificationMessages', 
        data:data
    };
}
export const getProductsToCartSaga =(data)=>{
    // console.warn('actions',data)
       return {
                   type:'getProductsToCartSaga',
                   data:data
                  
       }
   }
   export const setProductsToCartReducer =(data)=>{
    // console.warn('actions',data)
       return {
                   type:'setProductsToCartReducer',
                   data:data
                  
       }
   }

export const addToCartSaga =(data)=>{
 // console.warn('actions',data)
    return {
                type:'addToCartSaga',
                data:data
               
    }
}
export const addToCartReducer =(data)=>{
    // console.warn('actions',data)
       return {
                   type:'addToCartReducer',
                   data:data
                  
       }
   }


export const removeFromCartSaga =(data)=>{
    //console.warn('actions',data)
     return {
                 type:'removeFromCartSaga',
                 data:data
                 
                
     }
 }

 export const removeFromCartReducer =(data)=>{
    //console.warn('actions',data)
     return {
                 type:'removeFromCartReducer',
                 data:data
                 
                
     }
 }

 export const resetCart =(data)=>{
    //console.warn('actions',data)
     return {
                 type:'resetCart',
                 data:data
                 
                
     }
 }
 

 export const getUser=(data)=>{
    return{
                type:'get',
                data:data
    }
}
export const setUser=(details)=>{
    return{
                type:'set',
                details:details
    }
}

export const updateUser=(data)=>{
    console.log(data,'upppp')
    return {
        type:'update',
            data:data
    }
}


export const updateUserDetails=(data)=>{
    return {
        type:'updateDetails',
            data:data
    }
}
export const deleteDispatch =(data)=>{
    return {
        type:'delete',
        data:data
    }
}

export const deleteDetails =(data)=>{
    return {
        type:'deleteDetails',
        data:data
    }
}

export const addToSaga =(data)=>{
    console.log(data, "saga")
    return {
        type:'add',
        data:data
    }
}
export const addToReducer =(data)=>{
    return {
        type:'addDetails',
        data:data
    }
}

export const sign_up_saga = (data) =>{
    return {
        type:"sign_up_saga",
        data:data
    }
}
export const sign_in_saga = (data) =>{
        return {
            type:"sign_in_saga",
            data:data
        }
    }
    export const getSign_In = (data) =>{
        return {
            type:"getSign_In",
            data:data
        }
    }
export const sign_in_reducer = (data) => {
   // console.log("redd",data)
    return {
        type:"sign_in_reducer", 
        data:data
    }
}
