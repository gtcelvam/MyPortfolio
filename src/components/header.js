import React from "react"
import "../index.css"

var Header = function(){
    return(
        <div className="header">
            <div className="logo">
                <h1><span><i class="fas fa-paper-plane"></i></span> Thamarai <span>Selvan</span></h1>
            </div>
            <div className="navbar">
                <ul>
                    <li><a href="/">About Me</a></li>
                    <li><a href="https://github.com/gtcelvam">Projects</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header