import React, { Component } from "react"
import ReactDOM from "react-dom"
import App from "./App"


class Main extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <App/>
            </div>
        )
    }
}


var root = document.getElementById("root");

ReactDOM.render(<Main/>,root);
