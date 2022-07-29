// Authentication Cheker - check if user is Logged in 

import { useContext } from "react"; 
import { Navigate } from "react-router-dom"; 
import { UserContext } from "../contexts/UserContext"; 

export default function AuthChecker(props) {
    const { loggedInUser } = useContext(UserContext); 

    if (!loggedInUser) {
        return <Navigate to="/login"/> 
    } else {
        return props.children; 
    } 
} 