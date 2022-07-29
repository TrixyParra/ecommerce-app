import { useState } from "react";
import LabelTextInput from "./LabelTextInput";

export default function Login() {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    
    function handleSubmit(e) {
        e.preventDefault(); 
        console.log("Form Submitted"); 
    } 

    return (
        <>
            <div>Login</div> 
            <form onSubmit={handleSubmit}>
                <LabelTextInput 
                    name="Email" 
                    value={email} 
                    setValue={setEmail} 
                /> 
                <LabelTextInput 
                    name="Password" 
                    value={password} 
                    setValue={setPassword} 
                    inputType="password" 
                />               
            </form> 
        </> 
    ); 
} 