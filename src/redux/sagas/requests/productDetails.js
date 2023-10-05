import axios from 'axios'; 

export const requestGetProduct = (data)=>{
    return axios.request({
        method:'get',
        url:'http://localhost:8081/book/list',
        headers:{Authorization: ` ${localStorage.getItem('authorization')}`}

    })
}

export function requestUpdateProduct(data){
    return axios.request({
        method:'put',
        url:`http://localhost:8081/book/${data.id}`,
        params:{price: data.price,
        ratings: data.ratings},
        headers:{Authorization: `Bearer ${localStorage.getItem('authorization')}`}

    })
}



