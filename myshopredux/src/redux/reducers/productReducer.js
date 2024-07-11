import { ActionTypes } from "../constants/actionTypes";

const intialState ={
    Products:[
        {
            id:1,
            title:"Raju",
            category:'Prgrammer'
        },
    ],
};
// const [first, setfirst] = useState(second)

// very time reducers takes state and action
export const productReducer = (state=intialState, {type, payload})=>{
    switch (type){
        case ActionTypes.SET_PRODUCTS:
            return state;

        default:
            return state;
        }
};


