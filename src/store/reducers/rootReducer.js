import { combineReducers } from "redux";
import puppyReducer from "./puppyReducer"
import counterReducer from "./counterReducer"

const rootReducer = combineReducers({
    counter: counterReducer,
    puppies: puppyReducer,

})

export default rootReducer;