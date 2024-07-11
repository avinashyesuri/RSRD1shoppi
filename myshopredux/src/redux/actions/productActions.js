import { ActionTypes } from "../constants/actionTypes";


//it works as an "object" every action
export const setProducts = (products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    };
};


export const selectedProducts = (products)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCTS,
        payload:products
    };
};

export const removalProducts = (products)=>{
    return{
        type:ActionTypes.REMOVAL_SEL_PRODUCTS,
        payload:products
    };
};