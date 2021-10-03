import {BUY_BURGER} from "./burgerActionTypes";

let buyburger=()=>{
    return{
        type:BUY_BURGER,
        payload:{
            info:"purchasing a burger"
        }
    }
}
export {buyburger}