import { useRef, useState } from "react";
import validatePassword from "../../helper/passwordValidator.js";
import validateEmail from "../../helper/emailValidator.js"
import "./Form.css";
function Form() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

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
            emailRef.current.focus();
            const emailVal = emailRef.current.value;
            console.log("password does not contain required params", emailVal);
        }
    }

    const handleValidateEmail = () => {
        const email = formValues.email;
        if(!validateEmail(email)) {
            passwordRef.current.focus();
            const passwordVal = passwordRef.current.value;
            console.log("not a valid email", passwordVal);
        }
    }
    return(
        <>
            <form onSubmit={handleFormSubmit}>
                <div className="wrapper email-input-wrapper">
                    <input 
                    type="text" 
                    placeholder="Enter your email address" 
                    value={formValues.email}
                    ref={emailRef}
                    onChange={(e) => setFormValues({...formValues, email: e.target.value})}
                    />
                </div>
                <div className="wrapper password-input-wrapper">
                    <input 
                    type="password" 
                    placeholder="Enter your password" 
                    value={formValues.password}
                    ref={passwordRef}
                    onChange={(e) => setFormValues({...formValues, password: e.target.value})}
                    />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default Form;