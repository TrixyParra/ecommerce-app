import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; 

export default function Home() {

    return (
        <>
            <header className="Home-Header"></header> 

            <div className="Categories">
                <h2 className="Category-Title">
                    Bringing you the latest in a variety of categories to shop from!
                </h2> 
                <div className="Category-List">
                    <div className="Womens">
                        <h3>Women's Clothing</h3> 
                    </div> 
                    <div className="Mens">
                        <h3>Men's CLothing</h3> 
                    </div> 
                    <div className="Jewelry">
                        <h3>Jewelry</h3> 
                    </div> 
                    <div className="Electronics">
                        <h3>Electronics</h3> 
                    </div> 
                </div> 
                <Link to="/shop">
                <button className="Shop-Button">Start Shopping</button> 
                </Link> 
            </div> 

            <div className="Slogan-Mailing">
                <div className="Slogan">
                    <h2>" Everything you need,<br></br>FOR <span className='You-TextHome'>YOU</span> "</h2>
                </div> 
                <div className="Mailing-List">
                    <h3>Join our Mailing List!<br /><FontAwesomeIcon icon={faEnvelope} size="large" /></h3> 
                    <p>Stay in the loop for exclusive deals and new arrivals.</p> 
                    <input type="email" /> 
                    <button>Join</button> 
                </div> 
            </div>  
        </> 
    ); 
} 