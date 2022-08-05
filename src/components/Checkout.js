import { Link } from "react-router-dom"; 
import { CartState } from "../contexts/Context"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCreditCard } from "@fortawesome/free-solid-svg-icons"; 

export default function Checkout() {
    const {
        state: { cart },
        dispatch,
      } = CartState(); 

    return (
        <>
            <div className="Cart" style={{ textAlign: "center", padding: "30px" }}>
                <h2>Checkout</h2> 

                {/* Mapping out the cart */}
                {cart.map((product) => (
                <div className="Checkout-Items">
                    <img src={product.image} alt="" /> 
                    {/* <div classname="Cart-Details"> */}
                        <p>{product.title}</p> 
                        <p><b>Quantity:</b><br />{product.qty}</p> 
                        <p><b>Price:</b><br />${product.price.toFixed(2)}</p> 
                    {/* </div>  */}
                </div>
                ))} 

                <div className="Cart-Total">
                    <h3>Total:</h3> 
                    <h3>${cart.reduce((acc, product) => acc + product.qty * product.price, 0).toFixed(2)}</h3> 
                </div> 

                <form className="Checkout-Form">
                    <h2>Payment Information<br /><FontAwesomeIcon icon={faCreditCard} /></h2> 
                    <label htmlFor="">First Name</label> 
                    <input type="text" required autoComplete="off" /> 
                    <label htmlFor="">Last Name</label> 
                    <input type="text" required autoComplete="off" /> 
                    <label htmlFor="">Shipping Address</label> 
                    <input type="text" required autoComplete="off" /> 
                    <label htmlFor="">Billing Address</label> 
                    <input type="text" required autoComplete="off" /> 
                    <label htmlFor="">Card Information</label> 
                    <input type="text" inputMode="numeric" placeholder="XXXX XXXX XXXX XXXX" required autoComplete="off" /> 
                </form> 

                <Link to="/shop">
                    <button
                        onClick={() => {
                            dispatch({ type: "CLEAR_CART" });
                        }}
                        className="Checkout-Button"
                    >
                        Place Order
                    </button> 
                </Link> 
            </div> 
        </> 
    ); 
} 