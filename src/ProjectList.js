import React from "react";



var ProjectList = function (props) {
    var banner = props.item.img;
    var bannerImages = banner.map((item,index)=><img src={item} key={index} className="project-image" alt={props.item.name} />);
    var tags = props.item.des;
    var desc = tags.map((item,index)=><li className='tags' key={index}><i class="fas fa-tag"></i> {item}</li>);
    return (
        <div className="project-card">
            <div className={props.order != null ? "project-img-container order" : "project-img-container"}>
            {/* style={props.order != null ? props.order : ''} */}
            {bannerImages}
            </div>
            <div className="project-desc-container">
                <h1 className="project-title">{props.item.name}</h1>
                <ul className="project-des">{desc}</ul>
                <button className="btn"><a target='_blank' href={props.item.link}><i className="fas fa-location-arrow"></i> Visit here</a></button>
            </div>
        </div>
    )
}

export default ProjectList