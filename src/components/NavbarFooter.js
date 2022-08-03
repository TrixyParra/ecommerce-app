import NavLink from './NavLink';
import { Outlet } from 'react-router-dom'; 
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext'; 
// import { useSelector } from 'react-redux/es/hooks/useSelector'; 

export default function NavbarFooter() {  ////(props) 
    const { loggedInUser } = useContext(UserContext); 

    // Geting a state of addItems 
    // write the name of the file not the item 
    // const state = useSelector((state) => state.addItem); 
    
    return (
        <>
            <nav className="Navbar">
                <h2>Store <span>Name</span></h2> 
                <div className="Nav-Links">
                    <NavLink route="/" label="Home" /> 
                    <NavLink route="/shop" label="Shop" /> 
                    <NavLink route="/cart" label="Cart (0)" /> 
                    {/* <NavLink route="/cart" label="Cart ({state.length})" />  */}
                    { !loggedInUser && <NavLink route="/login" label="Login" /> } 
                    { loggedInUser && <NavLink route="/login" label="Logout" /> } 
                </div> 
            </nav> 
            <div className='Content'> {/*  style={{ padding: 40 }} */} 
            {/* {props.children}  */}
                <Outlet /> 
            </div> 
            <footer style={{ textAlign: "center" }}>
                <p><b>Stay Connected!</b></p>
                <div className="Social-Links">
                    <a href="https://www.facebook.com/">FaceBook</a> 
                    <a href="https://www.instagram.com/">Instagram</a> 
                    <a href="https://www.tiktok.com/">TikTok</a> 
                </div>
                <div className="Footer-NavLinks">
                    <a href="/">Home</a> 
                    <span className="Footer-Line">|</span> 
                    <a href="/shop">Shop</a> 
                    <span className="Footer-Line">|</span> 
                    <a href="/cart">Cart</a>
                </div>
                <div className="Footer-StoreName">&copy; 2022 Trixy Parra</div>
            </footer> 
        </> 
    ); 
} 

// ToDo: Make nav it's own component ? 
// ToDo: Fix the Logout to refresh login page ?