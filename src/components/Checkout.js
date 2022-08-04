import { Link } from "react-router-dom"; 
import { CartState } from "../contexts/Context";

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
                <div className="Cart-Items">
                    <img src={product.image} alt="" /> 
                    {/* <div classname="Cart-Details"> */}
                        <p>{product.title}</p> 
                        <p><b>Quantity:</b><br />{product.qty}</p> 
                        <p><b>Price:</b><br />${product.price}</p> 
                    {/* </div>  */}
                </div>
                ))} 

                <form>

                </form>

                <Link to="/shop">
                    <button
                        onClick={() => {
                            dispatch({ type: "CLEAR_CART" });
                        }}
                        className="Checkout-Button"
                    >
                        Order
                    </button> 
                </Link> 
            </div> 
        </> 
    ); 
} 