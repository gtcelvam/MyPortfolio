import React,{useState,useEffect,useRef} from "react";
import SkillList from "./list/skillList";
import axios from "axios";
import "../css/skill.css"

 function Skills(){
        const [skill,setSkill] = useState([]);
        const [load,setLoad] = useState(true);
        useEffect(()=>{
            axios.get('https://ts-admin.herokuapp.com/skill').then(data=>{
                setSkill(data.data);
                setLoad(false);
            }).catch(err=>console.log(err));
        },[]);
        var skills = skill.map((item,index) =>{
            return <SkillList key={index} item={item}/>
         });
        var LoadImg = ()=>{
            return(
            <div className="skill-load">
                <img src='/images/other/Loading.gif' className="skill-img-load" alt="loading"/>
                <p className="skill-load-head">Loading...</p>
            </div>
            )}
        return(
            <div>
                <h1 className="skills-head">Skills</h1>
                <div className="skill-set">
                {load ? <LoadImg/> : skills}
                {/* <LoadImg/> */}
                </div>
            </div>
        )
}


export default Skills