import {BUY_PIZZA} from "./pizzaActionTypes";

let intialState={
    pizzaCount:500
}
let pizzaReducer=(state=intialState,action)=>{
    let {type}=action
    switch (type) {
        case BUY_PIZZA:
            return{
                ...state,
                pizzaCount: state.pizzaCount-1
            }
        default:return state;

    }

}
export{pizzaReducer}