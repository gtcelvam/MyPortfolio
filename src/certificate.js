import React from "react"
import certificateData from "./components/certificateData"
import CertificateList from "./certificatelist"
import "./index.css"

function Certificate() {
    var CertificateItems = certificateData.map(item=>{
        return <CertificateList key={item.id} item={item}/>
    });
    return(
        <div className="certificate-container">
            <h1 className="Certificate-title">Certificates</h1>
            <div className="certificateList">
            {CertificateItems}
            </div>
        </div>
    ) 
}

export default Certificate