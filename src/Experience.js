import react, { Component } from "react"
import "./index.css"

class Experience extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="work">
                <div className="work-title">
                    <h1>Work Experience</h1>
                </div>
                <div className="work-detail">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG5.png" alt="amazon"/>
                    <h1>Amazon</h1>
                    <h2>Print Quality Assurance Associate</h2>
                    <h3>July 2019 - December 2020</h3>
                    <p><i className="fa fa-map-marker" aria-hidden="true"></i>Chennai</p>
                    <p>Responsible for checking the quality of the content and also to check the content meet the criteria of the process</p>
                </div>
            </div>
        )
    }
}



export default Experience