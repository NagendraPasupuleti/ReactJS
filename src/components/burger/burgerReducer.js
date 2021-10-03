import {BUY_BURGER} from "./burgerActionTypes";

let intialState={
    burgerCount:1000
}

let burgerReducer=(state=intialState,action)=>{
    switch (action.type) {
        case BUY_BURGER:
            return{
                ...state,
                burgerCount:state.burgerCount-1
            }
        default:return state

    }

}
export {burgerReducer}