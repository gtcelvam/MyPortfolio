import React, { Component } from "react"
import Footer from "./components/footer"
import Header from "./components/header"
import Main from "./components/main"
import Experience from "./components/Experience"
import Skills from "./components/skills"
import Certificate from "./components/certificate"




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
            <Certificate/>
            <Footer/>
            </div>
        )
    }
}


export default App