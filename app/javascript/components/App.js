import React from 'react'
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Greeting from "./Greeting";
import Home from "./Home"
import store from "../Redux/configureStore";
import './app.css'


const App = () => {
  return (
    <div className="App">
      <Provider store = { store }>
        <React.Fragment>
          <BrowserRouter>
            <Routes>
              <Route exact path="/"  element = {<Home />}/>
              <Route path="/greeting"  element = {<Greeting />}/>
            </Routes>
          </BrowserRouter>
        </React.Fragment>
      </Provider>
       

    </div>
  )
}

export default App
