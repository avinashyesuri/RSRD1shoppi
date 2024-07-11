import { ActionTypes } from "../constants/actionTypes";

const intialState ={
    Products:[],
};
// const [first, setfirst] = useState(second)

// very time reducers takes state and action
export const productReducer = (state=intialState, {type, payload})=>{
    switch (type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, Products:payload};  //existing state and payload

        default:
            return state;
        }
};


export const selectedProductReducer = (state={}, {type, payload})=>{
    switch (type){
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state, ...payload};  //existing state and payload

        default:
            return state;
        }
};


