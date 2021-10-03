import React from 'react';
import './App.css';
import PizzaHut from "./components/PizzaHut";
import {Provider} from "react-redux";
import {store} from "./components/redux/store"


function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm bg-info text-white navbar-dark">
        <a href="" className="navbar-brand">React Redux</a>
      </nav>
        <Provider store={store}>
            <PizzaHut/>
        </Provider>


    </div>
  );
}

export default App;
