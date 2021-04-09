import React, { useState } from "react"
import certificateData from "./components/certificateData"
import CertificateList from "./certificatelist"
import "./index.css"

function Certificate() {
    const [current, setCurrent] = useState(0);
    const length = certificateData.length;
    const nextSlide = ()=>{
        setCurrent(current === length-1 ? 0 : current + 1);
    }
    const prevSlide = ()=>{
        setCurrent(current === 0 ? length-1 : current - 1);
    }
    var CertificateItems = certificateData.map((item,index)=>{
        return (
                <CertificateList key={item.id} slider={index === current ? "slider-anime" : ""} classvalue={index === current ? "certificate active" : "certificate"} item={item}/>
        )
    });
    return(
        <div className="certificate-container">
            <h1 className="Certificate-title">Certificates</h1>
            <div className="certificateList">
            <div className="arrow"><i className="fas fa-chevron-left slide-btn btn-left" onClick={prevSlide}></i></div>
            {CertificateItems}
            <div className="arrow"><i className="fas fa-chevron-right slide-btn btn-right" onClick={nextSlide}></i></div>
            </div>
        </div>
    ) 
}

export default Certificate