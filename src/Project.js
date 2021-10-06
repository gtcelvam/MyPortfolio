import React from "react"
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import ProjectData from "../src/components/projectData"
import ProjectList from "./ProjectList"
import Header from "../src/components/header"



var Project = function() {
    var Projects = ProjectData.map((item,index)=>{
        return (<div>
            <ProjectList key={item.id} item={item} order={index % 2 != 0 ? 'order' : null}/>
        </div>)
    })
    return(
        <div>
            <Header/>
            <h2 style={{margin : "20px 0px",textAlign : "center"}}>My Sample projects are included here</h2>
            <div className="project-container">
            {Projects}
            </div>
        </div>
    )
}




export default Project