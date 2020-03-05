import {productsAPI} from "../api/api";

const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_PRODUCTS_NAME = 'SET_PRODUCTS_NAME';

let initialState = {
    products: [],
    name: ""
}
const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state, products: [...action.products]
            }
        case SET_PRODUCTS_NAME:
            return {
                ...state, name: action.name
            }

            
        default:
            return state;

    }
}

export const setProductsAC = (products) => ({type: SET_PRODUCTS, products});
export const _handleNameChange = name =>  ({type: SET_PRODUCTS_NAME, name});

export const getProducts = (name) => {
    return async (dispatch) => {
        dispatch(_handleNameChange(name));   
        let data = await productsAPI.getProducts()
       
            dispatch(setProductsAC(data.products));   
    }
}

export default productsReducer;