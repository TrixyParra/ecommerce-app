// Making NavLinks Active 

import { NavLink as RouterNavLink } from "react-router-dom"; 

export default function NavLink({ route, label }) {
    function styleByActiveStatus(isActive) {
        return isActive 
            ? { fontWeight: "bold", borderBottom: "1px solid #0afb60" } 
            : { fontWeight: "normal" }; 
    } 

    return (
        <RouterNavLink to={route} style={({ isActive }) => styleByActiveStatus(isActive)}>
            {label}
        </RouterNavLink> 
    ); 
} 