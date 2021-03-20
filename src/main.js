import React, { Component } from "react"

class Main extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="main">
                <div className="c-left"></div>
                <div className="c-right">
                    <div className="profile">
                        <div className="img-box">
                            <img src="https://media-exp1.licdn.com/dms/image/C5103AQGNyqTKOPMfrQ/profile-displayphoto-shrink_800_800/0/1551808503092?e=1621468800&v=beta&t=sEC8SqFStu1dx5OP44JAHIcxGSzzXlt7A_qPY_kHHKM" id="img" alt="myimg"/>
                        </div>
                        <div className="details">
                            <h1>Thamarai selvan</h1>
                            <hr/>
                            <p>Web Developer</p>
                        </div>
                        <div className="icons">
                            <ul>
                                <li><a href="/"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/thamarai-selvan-851068164/"><i class="fab fa-linkedin"></i></a></li>
                                <li><a href="https://github.com/gtcelvam"><i class="fab fa-github"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="description">
                        <div className="details">
                        <h1>Hello</h1><br/>
                        <p>Here's what I'm <span>|</span> What I do</p><br/>
                        <div className="btn-div">
                            <button className="btn"><a href="">Resume</a></button>
                            <button className="btn"><a href="https://github.com/gtcelvam">Projects</a></button>
                        </div>
                        <p>Enthusiastic and self-motivated fresher Web designer. Eager to pursue career web development, UX, and visual design skills. currently living in Chennai</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main