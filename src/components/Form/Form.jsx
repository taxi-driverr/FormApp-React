import { useContext, useRef, useState } from "react";
import "./Form.css";
import { FormContext } from "../providers/FormContext";
import Input from "../Input/Input";
import validateEmail from "../../helper/emailValidator.js"
import validatePassword from "../../helper/passwordValidator.js"


function Form() {

    const{formInput}  = useContext(FormContext);
    
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formInput);
        handleInvalidEmail();
        handleInvalidPassword();
         
    }


    const handleInvalidEmail = () => {
        if(!validateEmail(formInput.email)){
        emailRef.current.setInvalid();
        emailRef.current.shake();
        }
    }


    const handleInvalidPassword = () => {
         if(!validatePassword(formInput.password)){
            passwordRef.current.setInvalid();
            passwordRef.current.shake();
        }
    }


   

   
    return(
        <>
            <form onSubmit={handleFormSubmit} noValidate>
                <div className="wrapper email-input-wrapper">
                   
                    <Input 
                        type="email"
                        id="email-input"
                        label="email"
                        ref={emailRef}
                        checkOnBlur = {handleInvalidEmail}
                    />

                </div>
                <div className="wrapper password-input-wrapper">
                   
                    <Input 
                        type="password"
                        id="password-input"
                        label="password"
                        ref={passwordRef}
                        checkOnBlur = {handleInvalidPassword}
                    />

                </div>

                <input type="submit" value="Submit" />

            </form>
        </>
    )
}

export default Form;