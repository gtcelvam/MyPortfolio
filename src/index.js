import React, { Component } from "react"
import ReactDOM from "react-dom"
import {BrowserRouter, Route} from "react-router-dom"
import App from "./App"
import Contact from "./contact"


class Main extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <BrowserRouter>
            <div>
                <Route path="/" component={App} exact={true}/>
                <Route path="/contact" component={Contact}/>
            </div>
            </BrowserRouter>
        )
    }
}


var root = document.getElementById("root");

ReactDOM.render(<Main/>,root);
