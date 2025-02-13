import axios from 'axios'; 
const url = process.env.REACT_APP_BASE_URL

export const requestGetProduct = (data)=>{
    console.log('filtr sendeing ', data)
    return axios.request({
        method:'post',
        url:`${url}/book/list`,
        headers:{Authorization: ` ${localStorage.getItem('authorization')}`},
        // params: data,
        data,

    })
}

export function requestUpdateProduct(data){
    return axios.request({
        method:'put',
        url:`${url}/book/${data.id}`,
        params:{price: data.price,
        ratings: data.ratings},
        headers:{Authorization: `Bearer ${localStorage.getItem('authorization')}`}

    })
}



