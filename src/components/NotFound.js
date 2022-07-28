import { Link } from "react-router-dom"; 

export default function NotFound() {
    return (
        <div className="Not-Found">
            <h1>Oops!</h1> 
            <p>Looks like the page you are looking for cannot be found or no longer exists.</p> 
            <Link to={"/"}>Back to the Main page</Link> 
        </div> 
    ); 
} 