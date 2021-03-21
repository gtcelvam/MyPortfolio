import React from "react"
import Header from "./components/header"
import Footer from "./components/footer"
import "./index.css"


var Contact = function(){
    return(
        <div className='contact-page'>
            <Header/>
            <div className="contact-container">
                <div className="contact-main">
                    <h1>Thamarai Selvan</h1>
                    <div className="contact">
                            <div className="contact-details">
                            <p>Location</p>
                            <p><i className="fa fa-map-marker" aria-hidden="true"></i>Chennai</p>
                            </div>
                            <div className="contact-details">
                            <p>Mobile Number</p>
                            <p><i className="fa fa-mobile" aria-hidden="true"></i>+919489029654</p>
                            </div>
                            <div className="contact-details">
                            <p>Email Address</p>
                            <p><i className="fa fa-paper-plane" aria-hidden="true"></i>gtcelan@gmail.com</p>
                            </div>
                        </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default Contact