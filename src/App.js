import React, { Component } from "react"
import Footer from "./components/footer"
import Header from "./components/header"
import Main from "./main"
import Experience from "./Experience"
import Skills from "./skills"

class App extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
            <Header/> 
            <Main/>   
            <Experience/>
            <Skills/>
            <Footer/>
            </div>
        )
    }
}


export default App