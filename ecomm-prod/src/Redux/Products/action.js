import { GET_ALL_PRODUCTS, SET_ALL_PRODUCTS } from "./actionTypes";
import axios from 'axios';

export const getAllProducts = (payload) => {
    return {
        type: GET_ALL_PRODUCTS,
        payload,
    }
}

export const setAllProducts = (payload) => {
    return {
        type: SET_ALL_PRODUCTS,
        payload,
    }
}

export const fetchAllProducts = () => (dispatch) => {
    dispatch(getAllProducts())
    axios({
        method: "get",
        url: "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products"
    }).then((res) => {
        console.log(res.data)
        dispatch(setAllProducts(res.data.data))
    }).catch((err) => {
        console.log(err)
    })
}
