import axios from "axios";

export function requestGetProductsToCart(data) {
  return axios.request({
    method: "get",
    url: `http://localhost:8081/cart/user-cart`,
    params: { id: data },
    headers: {
      Authorization: `${localStorage.getItem("authorization")}`,
    },
  });
}

export function requestAddProductsToCart({ id, product_id }) {
  return axios.request({
    method: "post",
    url: `http://localhost:8081/cart/user-cart`,
    data: { id: id, product_id: product_id },
    headers: {
      Authorization: ` ${localStorage.getItem("authorization")}`,
    },
  });
}

export function requestDeleteProductsFromCart({ id, product_id }) {
  return axios.request({
    method: "delete",
    url: `http://localhost:8081/cart/user-cart`,
    data: { id: id, product_id: product_id },
    headers: {
      Authorization: ` ${localStorage.getItem("authorization")}`,
    },
  });
}
