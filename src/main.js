import React, { Component } from "react"
import Typical from "react-typical"

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
                            <img src="./images/gts.JPG" id="img" alt="myimg"/>
                        </div>
                        <div className="details">
                            <h1>Thamarai selvan</h1>
                            <hr/>
                            <p>Web <Typical wrapper="b" loop={Infinity} steps={["Developer",2000,"Designer",1000]} /></p>
                        </div>
                        <div className="icons">
                            <ul>
                                <li><a href="http://api.whatsapp.com/send?phone=+919698229654"><i class="fab fa-whatsapp"></i></a></li>
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
                            <button className="btn"><a href="https://drive.google.com/file/d/1PSN8HpCgeWXysOSqxOfTIhpb4R04g5G2/view?usp=sharing">Resume</a></button>
                            <button className="btn" id="btn-projects"><a href="/project">Projects</a></button>
                        </div>
                        <p>Enthusiastic and self-motivated fresher Web Developer.Eager to pursue career on web development with some relevent skills on Full stack development.</p>
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