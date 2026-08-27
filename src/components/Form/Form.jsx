import { useState } from "react";
import validatePassword from "../../helper/passwordValidator.js";
import validateEmail from "../../helper/emailValidator.js"
import "./Form.css";
function Form() {

    const[formValues, setFormValues] = useState({
        email: "",
        password: ""
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleValidateEmail();
        handleValidatePassword();
        setFormValues({
            email: "",
            password: ""
        });
    }

    const handleValidatePassword = () => {
        const password = formValues.password;
        if(!validatePassword(password)){
            console.log("password does not contain required params");
        }
    }

    const handleValidateEmail = () => {
        const email = formValues.email;
        if(!validateEmail(email)) 
            console.log("not a valid email")
    }
    return(
        <>
            <form onSubmit={handleFormSubmit}>
                <div className="wrapper email-input-wrapper">
                    <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    value={formValues.email}
                    onChange={(e) => setFormValues({...formValues, email: e.target.value})}
                    />
                </div>
                <div className="wrapper password-input-wrapper">
                    <input 
                    type="password" 
                    placeholder="Enter your password" 
                    value={formValues.password}
                    onChange={(e) => setFormValues({...formValues, password: e.target.value})}
                    />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default Form;