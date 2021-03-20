import React, { Component } from "react"
import Footer from "./components/footer"
import Header from "./components/header"
import Main from "./main"

class App extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
            <Header/> 
            <Main/>   
            <Footer/>
            </div>
        )
    }
}


export default App