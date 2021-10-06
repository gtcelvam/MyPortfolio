import React from "react";
import SkillList from "./skillList";
import SkillData from "./components/skillData";
import "./index.css"

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