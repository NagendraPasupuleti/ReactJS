import {combineReducers} from "redux";
import {pizzaReducer} from "../pizza/pizzaReducer";
import {burgerReducer} from "../burger/burgerReducer";

let rootReducer=combineReducers(
    {
        pizza:pizzaReducer,
        burger:burgerReducer

    }
)

export {rootReducer}