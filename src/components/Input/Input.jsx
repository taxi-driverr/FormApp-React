import { useContext, useState } from "react";
import { FormContext } from "../providers/FormContext";

function Input({type, id, label}){
    const [text, setText] = useState("");
    const {formInput, setFormInput} = useContext(FormContext);
    return(
        <input 
            type={type}
            id={id}
            value={text}
            onChange = {(e) =>{ 
                setText(e.target.value)
                setFormInput({...formInput, [label]: e.target.value})
            }}
        />
    )
}

export default Input;