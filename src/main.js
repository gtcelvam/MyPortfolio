import React, { Component } from "react"
import Typical from "react-typical"


class Main extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="main">
                <img id="bg-image" src='https://wallpaperaccess.com/full/4609570.jpg' alt="bg" />
                <div className="glass-bg">
                    <div className="profile">
                        <div className="details">
                            <h1>Thamarai selvan</h1>
                            <p>Hello! I'm a Web <Typical wrapper="b" loop={Infinity} steps={["Developer",2000,"Designer",1000]} /></p>
                        </div>
                        <div className="overview">
                            <p>Here's what I'm <span>|</span> What I do</p><br/>
                            <div className="design-skill">
                                <ul>
                                    <li>UI/UX</li>
                                    <li>Full Stack Development</li>
                                    <li>Web Design</li>
                                    <li>Web Application Development</li>
                                </ul>
                            </div>
                        </div>
                        <div className="info">
                                <p className="info-details"><i className="fa fa-map-marker" aria-hidden="true"></i> Chennai</p>
                                <p className="info-details"><i className="fa fa-mobile" aria-hidden="true"></i> +919489029654</p>
                                <p className="info-details"><i className="fa fa-paper-plane" aria-hidden="true"></i> gtcelan@gmail.com</p>
                        </div>
                    </div>
                    <div className="description">
                        <div className="img-icon">
                            <div className="img-box">
                                <img src="./images/gts.JPG" id="img" alt="myimg"/>
                            </div>
                            <div className="icons">
                                <ul>
                                    <li><a href="http://api.whatsapp.com/send?phone=+919698229654" data-text="Whatsapp"><i class="fab fa-whatsapp"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/thamarai-selvan-851068164/" data-text="linkedIn"><i className="fab fa-linkedin"></i></a></li>
                                    <li><a href="https://github.com/gtcelvam" data-text="Github"><i className="fab fa-github"></i></a></li>
                                </ul>
                            </div>                                                           
                        </div>
                        <div className="btn-div">
                                <button className="resume-btn"><a href="https://drive.google.com/file/d/1PSN8HpCgeWXysOSqxOfTIhpb4R04g5G2/view?usp=sharing"><i class="fas fa-id-badge"></i> Resume</a></button>
                                <button className="project-btn" id="btn-projects"><a href="/project"><i class="fas fa-chalkboard-teacher"></i> Projects</a></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main