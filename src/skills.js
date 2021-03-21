import React, { Component } from "react"
import SkillList from "./skillList"
import SkillData from "./components/skillData"
import "./index.css"

function Skills(){
        var skills = SkillData.map(skill =>{
           return <SkillList key={skill.id} item={skill}/>
        }) 
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