import React from "react"
import "./index.css"
var SkillList = function (props) {
    return (
        <div className="skillList">
            <div className="s-container">
                <div className="s-image">
                    <img src={props.item.image} alt={props.item.name} />
                </div>
                <div className="s-description">
                    <h2>{props.item.name}</h2>
                    <p>{props.item.name}</p>
                </div>
            </div>
        </div>
    )
}


export default SkillList