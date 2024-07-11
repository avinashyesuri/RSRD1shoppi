import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from './productReducer';

const allReducers = combineReducers({
    allProd: productReducer,
    product:selectedProductReducer, 
});

export default allReducers;
