import axios from "axios";
const url = process.env.REACT_APP_BASE_URL

export function requestGetProductsToCart(data) {
  return axios.request({
    method: "get",
    url: `${url}/cart/user-cart`,
    params: { id: data },
    headers: {
      Authorization: `${localStorage.getItem("authorization")}`,
    },
  });
}

export function requestAddProductsToCart({ id, product_id }) {
  return axios.request({
    method: "post",
    url: `${url}/cart/user-cart`,
    data: { id: id, product_id: product_id },
    headers: {
      Authorization: ` ${localStorage.getItem("authorization")}`,
    },
  });
}

export function requestDeleteProductsFromCart({ id, product_id }) {
  return axios.request({
    method: "delete",
    url: `${url}/cart/user-cart`,
    data: { id: id, product_id: product_id },
    headers: {
      Authorization: ` ${localStorage.getItem("authorization")}`,
    },
  });
}
