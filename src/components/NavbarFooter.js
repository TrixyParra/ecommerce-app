import NavLink from './NavLink';
import { Outlet } from 'react-router-dom'; 
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export default function NavbarFooter() {  ////(props) 
    const { loggedInUser } = useContext(UserContext); 
    
    return (
        <>
            <nav className="Navbar">
                <h2>Store <span>Name</span></h2> 
                <div className="Nav-Links">
                    <NavLink route="/" label="Home" /> 
                    <NavLink route="/shop" label="Shop" /> 
                    <NavLink route="/cart" label="View Cart" /> 
                    { !loggedInUser && <NavLink route="/login" label="Login" /> } 
                    { loggedInUser && <NavLink route="/login" label="Logout" /> } 
                </div> 
            </nav> 
            <div className='Content'> {/*  style={{ padding: 40 }} */} 
            {/* {props.children}  */}
                <Outlet /> 
            </div> 
            <footer style={{ textAlign: "center" }}>
                <p>Stay Connected!</p>
                <div className="Social-Links">
                    <a href="https://www.facebook.com/">FaceBook</a> 
                    <a href="https://www.instagram.com/">Instagram</a> 
                    <a href="https://www.tiktok.com/">TikTok</a> 
                </div>
                <div className="Footer-Links">
                    <a href="/">Home</a> 
                    <a href="/shop">Shop</a> 
                    <a href="/cart">Cart</a> 
                </div>
                &copy; 2022 Trixy Parra
            </footer> 
        </> 
    ); 
} 

// ToDo: Make nav it's own component ? 
// ToDo: Fix the Logout to refresh login page ?