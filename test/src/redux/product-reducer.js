import {productsAPI} from "../api/api";

const SET_PRODUCTS = 'SET_PRODUCTS';

let initialState = {
    products: []
}
const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state, products: [...action.products]
            }
        default:
            return state;

    }
}

export const setProductsAC = (products) => ({type: SET_PRODUCTS, products});


export const getProducts = () => {
    return async (dispatch) => {
        let data = await productsAPI.getProducts()
            dispatch(setProductsAC(data.products));
    }
}

export default productsReducer;