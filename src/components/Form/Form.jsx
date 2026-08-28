import { useContext, useRef, useState } from "react";
import "./Form.css";
import { FormContext } from "../providers/FormContext";
import Input from "../Input/Input";



function Form() {

    const{formInput}  = useContext(FormContext);
    

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formInput);
    }

   
    return(
        <>
            <form onSubmit={handleFormSubmit} noValidate>
                <div className="wrapper email-input-wrapper">
                   
                    <Input 
                        type="email"
                        id="email-input"
                        label="email"
                    />

                </div>
                <div className="wrapper password-input-wrapper">
                   
                    <Input 
                        type="password"
                        id="password-input"
                        label="password"
                    />

                </div>

                <input type="submit" value="Submit" />

            </form>
        </>
    )
}

export default Form;