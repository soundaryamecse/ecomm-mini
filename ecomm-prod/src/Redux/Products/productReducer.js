import { GET_ALL_PRODUCTS, SET_ALL_PRODUCTS } from "./actionTypes";

export const initState = {
    isLoading: false,
    productData: [],
  };

  const ProductReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case GET_ALL_PRODUCTS:
        return {
          ...state,
          isLoading: true,
        };
      case SET_ALL_PRODUCTS:
        return {
          ...state,
          isLoading: false,
          productData: payload
        };
      default:
        return state;
    }
  };
  
  export default ProductReducer;