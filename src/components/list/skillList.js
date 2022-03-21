import React,{useEffect,useRef} from "react";
import "../../css/skill.css";
import StarRatings from 'react-star-ratings';
import {InterSection} from "../../effect/intersection";
var SkillList = function (props) {
    const skillRef = useRef();
    useEffect(()=>{
        const item = skillRef.current;
        const options = {
            threshold : 0.6,
            rootMargin : '0px -10px'
        }
        const skillObserver = new InterSection(options);
        skillObserver.observer().observe(item);
    },[])
    return (
        <div className="skillList" ref={skillRef}>
            <div className="s-container">
                <div className="s-description">
                    <h2 className="s-title">&nbsp;{props.item.skill}</h2>
                    <StarRatings starDimension="1rem" starSpacing="5px" rating={props.item.rating} starRatedColor='#00B752' numberOfStars={5} name='rating'/>
                </div>
                <div className="s-image">
                    <img src={props.item.imgUrl} alt={props.item.skill} />
                </div>
            </div>
        </div>
    )
}


export default SkillList