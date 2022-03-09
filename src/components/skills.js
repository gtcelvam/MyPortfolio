import React from "react";
import SkillList from "./list/skillList";
import SkillData from "../data/skillData";
import "../css/skill.css"

 function Skills(){
        var skills = SkillData.map(item =>{
            return <SkillList key={item.id} item={item}/>
         });
           return(
            <div>
                <h1 className="skills-head">Skills</h1>
                <div className="skill-set">
                {skills}
                </div>
            </div>
        )
}


export default Skills