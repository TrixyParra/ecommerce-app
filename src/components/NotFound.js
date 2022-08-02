import { Link } from "react-router-dom"; 

export default function NotFound() {
    return (
        <>
            <div className="Not-Found">
                <div className="Not-FoundText">
                    <h1>Oops!</h1> 
                    <p>The page you are looking for cannot be found or no longer exists.</p> 
                    <Link to={"/"} className="Link-BackHome">Back to <b>Home</b></Link> 
                </div> 
            </div> 
        </> 
    );         
} 