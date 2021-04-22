import React from "react"
import "./index.css"

function CertificateList(props) {
    return(
        <div className={props.classvalue}>
            <div className={props.slider}>
            <div className="certificate-img">
                <img src={props.item.img} alt={props.item.name}/>
            </div>
            <div className="certificate-data">
                <h3>{props.item.name}</h3>
                <div className="certificate-provider">
                    <img src={props.item.C_img} alt={props.item.C_name}/>
                    <p>{props.item.C_name}</p>
                </div>
                <div className="certificate-id">
                    <p>Creditional ID : {props.item.C_id}</p>
                    <p>Issue Date : {props.item.date}</p>
                </div>
            <button className="btn"><a href={props.item.link}><i className="fas fa-location-arrow"></i> View</a></button>
            </div>
            </div>
        </div>
    )
}


export default CertificateList