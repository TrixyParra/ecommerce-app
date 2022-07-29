import { useState, useContext } from "react"; 
import { useNavigate } from "react-router-dom"; 
import { UserContext } from "../contexts/UserContext"; 
import LabelTextInput from "./LabelTextInput"; 


const validUser = {
    id: 1, 
    name: "Trixy", 
    email: "trixy@email.com", 
    password: "abc123" 
}; 

export default function Login() {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [showLoginError, setShowLoginError] = useState(false); 
    const { setLoggedInUser } = useContext(UserContext); 
    const navigate = useNavigate(); 
    
    function handleSubmit(e) {
        e.preventDefault(); 
        console.log("Form Submitted"); 
        if (email === validUser.email && password === validUser.password) {
            // log in the user 
            setShowLoginError(false); 
            setLoggedInUser(validUser); 
            navigate("/cart");      // ToDo: page to navigate to 
        } else {
            // show an error on the screen 
            setShowLoginError(true); 
        } 
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
                <button type="submit">Login</button> 
            </form> 
            { showLoginError && <div>User Not Found</div> } 
        </> 
    ); 
} 