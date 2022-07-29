import NavLink from './NavLink';
import { Outlet } from 'react-router-dom'; 
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export default function NavbarFooter() {  ////(props) 
    const { loggedInUser } = useContext(UserContext); 
    
    return (
        <>
            <nav className="Navbar">
                <h2>Store Name</h2> 
                <div className="Nav-Links">
                    <NavLink route="/" label="Home" /> 
                    <NavLink route="/shop" label="Shop" /> 
                    <NavLink route="/cart" label="View Cart" /> 
                    { !loggedInUser && <NavLink route="/login" label="Login" /> } 
                </div> 
            </nav> 
            <div style={{ padding: 40 }}>
            {/* {props.children}  */}
                <Outlet /> 
            </div> 
            <footer>
                &copy; 2022 Trixy Parra
            </footer> 
        </> 
    ); 
} 

// ToDo: Make nav it's own component ? 