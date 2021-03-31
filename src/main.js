import React, { Component } from "react"

class Main extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="main">
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
                                <li><a href="https://www.facebook.com/thamarai.selvan.3975"><i className="fab fa-facebook"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/thamarai-selvan-851068164/"><i className="fab fa-linkedin"></i></a></li>
                                <li><a href="https://github.com/gtcelvam"><i className="fab fa-github"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="description">
                        <div className="details">
                        <h1>Hello</h1><br/>
                        <p>Here's what I'm <span>|</span> What I do</p><br/>
                        <div className="btn-div">
                            <button className="btn"><a href="https://drive.google.com/file/d/1RARzvVI59IklAjejHX2TxvFD_B486zWF/view?usp=sharing">Resume</a></button>
                            <button className="btn"><a href="/project">Projects</a></button>
                        </div>
                        <p>Enthusiastic and self-motivated fresher Web designer. Eager to pursue career web development, UX, and visual design skills.</p>
                        <div className="info">
                            <p className="info-details"><i className="fa fa-map-marker" aria-hidden="true"></i>Chennai</p>
                            <p className="info-details"><i className="fa fa-mobile" aria-hidden="true"></i>+919489029654</p>
                            <p className="info-details"><i className="fa fa-paper-plane" aria-hidden="true"></i>gtcelan@gmail.com</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main