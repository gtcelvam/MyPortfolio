import React from "react";
import "../../css/skill.css";
import StarRatings from 'react-star-ratings'
var SkillList = function (props) {

    return (
        <div className="skillList">
            <div className="s-container">
                <div className="s-description">
                    <h2 className="s-title">&nbsp;{props.item.name}</h2>
                    <StarRatings starDimension="1rem" starSpacing="5px" rating={props.item.stars} starRatedColor='#00B752' numberOfStars={5} name='rating'/>
                </div>
                <div className="s-image">
                    <img src={props.item.image} alt={props.item.name} />
                </div>
            </div>
        </div>
    )
}


export default SkillList