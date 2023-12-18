import axios from 'axios'; 
const url = process.env.REACT_APP_BASE_URL

export const requestGetProduct = (data)=>{
    return axios.request({
        method:'get',
        url:`${url}book/list`,
        headers:{Authorization: ` ${localStorage.getItem('authorization')}`}

    })
}

export function requestUpdateProduct(data){
    return axios.request({
        method:'put',
        url:`${url}book/${data.id}`,
        params:{price: data.price,
        ratings: data.ratings},
        headers:{Authorization: `Bearer ${localStorage.getItem('authorization')}`}

    })
}



