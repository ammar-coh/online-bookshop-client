

export const increment = () => {
    return {
        type: 'increment',

    };
}

export const chat = (data) => {
    return {
        type: 'receive',
        data: data
    };
}
export const chatFromDBSaga = (data) => {
    return {
        type: 'chatFromDBSaga',
        data: data
    };
}
export const clearChat = () => {
    return {
        type: 'clearChatRoom',
    };
}

export const createChatRoom = (data) => {
    return {
        type: 'createChatRoom',
        data: data
    };
}
export const chatFromDB = (data) => {
    return {
        type: 'chat from DB',
        data: data
    };
}
export const get_my_notifications_saga = (data) => {
    return {
        type: 'get_my_notifications_saga',
        data: data
    };
}
export const notification_real_time = (data) => {
    return {
        type: 'notification_real_time',
        data: data
    };
}

export const notificationDB = (data) => {
    return {
        type: 'notificationDB',
        data: data
    };
}

export const delete_notification = (data) => {
    return {
        type: 'delete_notification',
        data: data
    };
}
export const notification_clear = (data) => {
    return {
        type: 'clearNotificationMessages',
        data: data
    };
}
export const getProductsToCartSaga = (data) => {
    // console.warn('actions',data)
    return {
        type: 'getProductsToCartSaga',
        data: data

    }
}
export const setProductsToCartReducer = (data) => {
    // console.warn('actions',data)
    return {
        type: 'setProductsToCartReducer',
        data: data

    }
}

export const addToCartSaga = (data) => {
    // console.warn('actions',data)
    return {
        type: 'addToCartSaga',
        data: data

    }
}
export const addToCartReducer = (data) => {
    return {
        type: 'addToCartReducer',
        data: data

    }
}


export const removeFromCartSaga = (data) => {
    return {
        type: 'removeFromCartSaga',
        data: data


    }
}

export const removeFromCartReducer = (data) => {
    return {
        type: 'removeFromCartReducer',
        data: data


    }
}

export const resetCart = (data) => {
    return {
        type: 'resetCart',
        data: data


    }
}


export const getBookList = (data) => {
    return {
        type: 'getBookList',
        data: data
    }
}
export const setUser = (details) => {
    return {
        type: 'set',
        details: details
    }
}

export const updateUser = (data) => {
    return {
        type: 'update',
        data: data
    }
}


export const updateBookList = (data) => {
    return {
        type: 'updateBookList',
        data: data
    }
}
export const deleteDispatch = (data) => {
    return {
        type: 'delete',
        data: data
    }
}

export const deleteDetails = (data) => {
    return {
        type: 'deleteDetails',
        data: data
    }
}

export const addToSaga = (data) => {
    console.log(data, "saga")
    return {
        type: 'add',
        data: data
    }
}
export const addToReducer = (data) => {
    return {
        type: 'addDetails',
        data: data
    }
}

export const sign_up_saga = (data) => {
    return {
        type: "sign_up_saga",
        data: data
    }
}
export const sign_in_saga = (data) => {
    return {
        type: "sign_in_saga",
        data: data
    }
}
export const sign_out_saga = (data) => {
    return {
        type: "sign_out_saga",
        data: data
    }
}
export const getSign_In = (data) => {
    return {
        type: "getSign_In",
        data: data
    }
}
export const sign_in_reducer = (data) => {
    // console.log("redd",data)
    return {
        type: "sign_in_reducer",
        data: data
    }
}
export const sign_in_error_message = (data) => {
    // console.log("redd",data)
    return {
        type: "sign_in_error_message",
        data: data
    }
    
}
export const sign_out_reducer =(data)=>{
        return {
            type: "sign_out_reducer",
            data: data
        }
    
    }
