import {cakeReducer, iceCreamReducer} from "../redux"
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    cake: cakeReducer,
    ice: iceCreamReducer
})

export default rootReducer;