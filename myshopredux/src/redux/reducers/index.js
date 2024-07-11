import { combineReducers } from 'redux';
import { productReducer } from './productReducer';

const allReducers = combineReducers({
    allProd: productReducer, 
});

export default allReducers;
