import React from "react"

var ProjectList = function (props) {
    return (
        <div className="project-card">
            <div className="project-img-container">
            <img src={props.item.img} className="project-image" alt={props.item.name} />
            </div>
            <h1 className="project-title">{props.item.name}</h1>
            <p className="project-des">{props.item.des}</p>
            <button className="btn"><a href={props.item.link}><i class="fas fa-location-arrow"></i> Visit here</a></button>
        </div>
    )
}

export default ProjectList