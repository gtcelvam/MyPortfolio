import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../css/contact.css"
import Styled from "styled-components";
import emailJs from 'emailjs-com';

var Head = Styled.h1`
    font-size:2vw;
    margin-bottom:1%;
    color:white;
`;

var FormContainer = Styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    width:100%;
`;

var LabelContainer = Styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    padding:1% 5%
`;

var Label = Styled.label`
    font-size:1.5rem;
`


var Input = Styled.input`
    width:100%;
    margin:1% 0;
    padding:2% 1%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border:none;
    border-radius: 5px;
    &:focus{
        outline:none;
        border:1px solid #009EE2;
    }
`;

var TextArea = Styled.textarea`
    width:100%;
    margin:1% 0;
    padding:2% 1%;
    border:none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border-radius: 5px;
    &:focus{
        outline:none;
        border:1px solid #009EE2;
    }
`;

var ButtonContainer = Styled.div`
    width:50%;
`;

var Button = Styled.button`
    width:100%;
    padding:2% 0%;
    font-size:1.2rem;
    font-weight:600;
    background-color:#009EE2;
    color:white;
    border:none;
    cursor:pointer;
`;

var Contact = function(){
    var handleSubmit = (e)=>{
        e.preventDefault();
        emailJs.sendForm('service_hr0caik','template_u4a7113',e.target,'user_OBZekCbZxaC9FGkd9ne0y')
        .then(res=>{
            res.status === 200 && alert("Message Sent Successfully!");
        }).catch(err=>{
            console.log(err);
        });
        e.target.reset();
    }
    return(
        <React.Fragment>
        <div className='contact-page'>
            <Header/>
            <div className="contact-container">
                <Head>You Can Send Me Your Thoughts Here</Head>
                <div className="contact-main">
                    <FormContainer onSubmit={handleSubmit}>
                        <LabelContainer>
                        <Label>Enter Your Name Here</Label>
                        <Input type='text' name='name' placeholder="Name" required/>
                        </LabelContainer>
                        <LabelContainer>
                        <Label>Enter Your Email Here</Label>
                        <Input type='email' name='email' placeholder="Email" required/>
                        </LabelContainer>
                        <LabelContainer>
                        <TextArea placeholder="Enter Your Message Here.." name='message' rows="6" cols="50" required/>
                        </LabelContainer>
                        <ButtonContainer>
                            <Button><i class="fas fa-paper-plane"></i> Send</Button>
                        </ButtonContainer>
                    </FormContainer>
                </div>
            </div>
        </div>
        <Footer/>
        </React.Fragment>
    )
}


export default Contact