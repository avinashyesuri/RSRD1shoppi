import { createStore } from "redux";
import aalReducers from "./reducers/index";
const store = createStore(aalReducers, {},
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store