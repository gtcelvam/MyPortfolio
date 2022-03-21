import React,{ Component} from "react";
import "../css/experience.css";
import {InterSection} from "../effect/intersection";

class Experience extends Component{
    constructor(){
        super()
        this.workTitleRef = React.createRef();
        this.workDetailRef = React.createRef();
    }
    componentDidMount(){
        const workTitle = this.workTitleRef.current;
        const workDetail = this.workDetailRef.current;
        const work = [workTitle,workDetail];
        const options = {
            threshold : 0.5,
            rootMargin : '0px -10px'
        }
        const experienceObserver = new InterSection(options)
        work.forEach(item=>{
            experienceObserver.observer().observe(item);
        })
    }
    render(){
        return(
            <div className="work">
                <div className="work-title" ref={this.workTitleRef}>
                    <h1>Work Experience</h1>
                </div>
                <div className="work-detail" ref={this.workDetailRef}>
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG5.png" alt="amazon"/>
                    <h1>Amazon</h1>
                    <h2>Print Quality Assurance Associate</h2>
                    <h3>July 2019 - December 2020</h3>
                    <p><i className="fa fa-map-marker" aria-hidden="true"></i>Chennai</p>
                    <p>Responsible for checking the quality of the content and also to check the content whether it meet the criteria of the process</p>
                </div>
            </div>
        )
    }
}



export default Experience