// Making NavLinks Active 

import { NavLink as RouterNavLink } from "react-router-dom"; 

export default function NavLink({ route, label }) {
    function styleByActiveStatus(isActive) {
        return isActive 
            ? { fontWeight: "900", borderBottom: "1px solid rgb(40, 241, 40)" } 
            : { fontWeight: "normal" }; 
    } 

    return (
        <RouterNavLink to={route} style={({ isActive }) => styleByActiveStatus(isActive)}>
            {label}
        </RouterNavLink> 
    ); 
} 