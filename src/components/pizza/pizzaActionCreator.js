import {BUY_PIZZA} from "./pizzaActionTypes";

let buypizza=()=>{
    return{
        type:BUY_PIZZA,
        payload:{
            info:'purchasing a pizza'
        }
    }
}
export {buypizza}