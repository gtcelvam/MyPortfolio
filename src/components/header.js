import React, { Component } from "react"
import "../index.css"

class Header extends Component{
    constructor(){
        super()
        this.state = {
            toggle : false
        }
        this.menuToggle = this.menuToggle.bind(this);
    }
    menuToggle(){
        this.setState(prevState =>{
            return{
                toggle : !prevState.toggle
            }
        })
    }
    render(){
        var navigation = {
            color : "black",
            zIndex : "2"
        }
        var navbar = {
            width : "100%",
            height : "auto",
            position : "absolute",
            top : "100%",
            left : "0",
            display : "flex",
            flexDirection : "column",
            backgroundColor: "rgba(0,0,0,0.2)",
            color : "black",
            zIndex : "1",
            textAlign : "right"
        }
        return(
            <div className="header">
                <div className="logo">
                    <h1 id="name"><i className="fas fa-paper-plane"></i> Thamarai <span id="name">Selvan</span></h1>
                </div>
                <div className="navbar">
                    <div className="menuToggle">
                        <p style={this.state.toggle ? navigation : null} onClick={this.menuToggle}><i className="fas fa-bars"></i></p>
                    </div>
                    <ul style={this.state.toggle ? navbar : null} className="navigation" id="navigation">
                        <li><a href="/">About Me</a></li>
                        <li><a href="/project">Projects</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header