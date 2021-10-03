import React,{Fragment} from "react";
import pizza from '../images/pizza.jpg' ;
import {useSelector,useDispatch} from "react-redux";
import {buypizza} from "./pizza/pizzaActionCreator";
import {buyburger} from "./burger/burgerActionCreators";

let PizzaHut=()=>{
    let dispatch=useDispatch()
    let pizzaInfo=useSelector((state)=>{
        return state.pizza;


    });

    let burgerInfo=useSelector((state)=>{
        return state.burger
    })

    let actiondispatch=()=>{
        dispatch(buypizza())
    }

    return(
        <Fragment>
            <pre>{JSON.stringify(burgerInfo)}</pre>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header blue-gradient-rgba text-white">
                                <h2>Pizza Hut</h2>

                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src={pizza} alt=""className="img-fluid"/>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut autem cumque dolor eos ex magni maiores qui quibusdam, saepe.</p>

                                    </div>
                                    <div className="col-md-6">
                                        <h5>Total Available : {pizzaInfo.pizzaCount}</h5>
                                        <button onClick={actiondispatch} className="btn btn-outline-green btn-sm">BUYPIZZA</button>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header blue-gradient-rgba text-white">
                                <h2>Pizza Hut</h2>

                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src={pizza} alt=""className="img-fluid"/>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut autem cumque dolor eos ex magni maiores qui quibusdam, saepe.</p>

                                    </div>
                                    <div className="col-md-6">
                                        <h5>Total Available : {burgerInfo.burgerCount}</h5>
                                        <button onClick={()=>dispatch(buyburger())} className="btn btn-outline-green btn-sm">BUYburger</button>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default PizzaHut;