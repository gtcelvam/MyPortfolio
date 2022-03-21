import React,{useEffect,useRef} from "react";
import {InterSection} from "../../../effect/intersection";



var ProjectList = function (props) {
    const projectRef = useRef();
    useEffect(()=>{
        const item = projectRef.current;
        const options = {
            threshold : 0.3,
            rootMargin : '0px -10px'
        }
        const projectObserver = new InterSection(options);
        projectObserver.observer().observe(item);
    },[])
    var banner = props.item.img;
    var bannerImages = banner.map((item,index)=> <img src={item} key={index} className="project-image" alt={props.item.name} />);
    var tags = props.item.des;
    var desc = tags.map((item,index)=><li className='tags' key={index}><i class="fas fa-tag"></i> {item}</li>);
    return (
        <div className="project-card" ref={projectRef}>
            <div className={props.order != null ? "project-img-container order" : "project-img-container"}>
            {bannerImages}
            </div>
            <div className="project-desc-container">
                <h1 className="project-title">{props.item.name}</h1>
                <ul className="project-des">{desc}</ul>
                <button className="btn"><a target='_blank' href={props.item.link}><i className="fas fa-external-link-alt"></i> Visit here</a></button>
            </div>
        </div>
    )
}

export default ProjectList