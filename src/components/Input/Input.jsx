import React, { useContext, useEffect, useImperativeHandle, useRef, useState } from "react";
import { FormContext } from "../providers/FormContext";
import "./Input.css"
function Input({type, id, label, checkOnBlur}, ref){
    const [text, setText] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [shake, setShake] = useState(false);
    const {formInput, setFormInput} = useContext(FormContext);

    const localRef = useRef();

    useEffect(()=>{
        setIsValid(true);
        setShake(false);
    }, [text])

    useImperativeHandle(ref, ()=>{
        return {
            focus: () => localRef.current.focus(),
            setInvalid : () => setIsValid(false),
            shake : () => setShake(true)
        }
    }, []);

    return(
        <>
        <input 
            className={`${(!isValid)?"error-input":""} ${shake ? "shake" : ""}`}
            type={type}
            id={id}
            value={text}
            ref={ref}
            onBlur = {checkOnBlur}
            onChange = {(e) =>{ 
                setText(e.target.value)
                setFormInput({...formInput, [label]: e.target.value})
            }}
        />

        <br/>

        <span>{(!isValid) ? `${label} is invalid` : ""}</span>

        </>
    )
}

export default React.forwardRef(Input);