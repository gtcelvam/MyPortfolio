import React,{useEffect,lazy,Suspense} from "react";
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import ProjectData from "./data/projectData";
import ProjectList from "./component/ProjectList";
import Header from "../../components/header";
import {Run} from './effect/slider';
import './css/project.css';



var Project = function() {
    useEffect(() => {
        var imageContainer = document.querySelectorAll('.project-img-container');
        imageContainer.forEach(item=>{
            var slider = item.children;
            var len = item.children.length;
            var i = 0;
            if(slider.length > 0){
                if (len > 1) {
                    setInterval(() => {
                        var int = i >= len ? (i = 0) : i;
                        var x = i === 0 ? (x = len - 1) : (x = i - 1);
                        Run(int,x,len,slider)
                        i++;
                    }, 2000);
                }else{
                   slider[0].style.opacity = 1;
                }
            }
        })
    }, [])
    var Projects = ProjectData.map((item,index)=>{
        return (
            <ProjectList key={item.id} item={item} order={index % 2 != 0 ? 'order' : null}/>
            );
    })
    return(
        <div>
            <Header/>
            <h2 style={{margin : "20px 0px",textAlign : "center"}} className="project-head">My Sample projects</h2>
            <div className="project-container">
            {Projects}
            </div>
        </div>
    )
}




export default Project