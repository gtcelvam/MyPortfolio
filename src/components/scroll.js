import React,{useState,useEffect} from 'react'
import "../index.css"
import {useWindowScroll} from "react-use"


const ScrollToTop = ()=>{
    const {y : pageYOffset} = useWindowScroll();
    const [visible, setVisible] = useState(false);

    const handleVisibility = ()=>{
        if(pageYOffset > 400){
            setVisible(true);
        }else{
            setVisible(false);
        }
    }
    useEffect(()=>{
        handleVisibility();
    },[pageYOffset]);

    const handleScrollTop = ()=>{
        window.scroll({top : 0,behavior : "smooth"})
    }

    const styles = {
        color : "white",
        backgroundColor : "#174274"
    }
    return (
        <div className="scroll-to-top cursor-pointer text-center" onClick={handleScrollTop} style={visible === false ? {display : "none"} : null}>
            <i className="icon fas fa-hand-point-up" style={{styles}}></i>
        </div>
    )
}

export default ScrollToTop
