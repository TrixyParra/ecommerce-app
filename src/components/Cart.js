import { Link } from "react-router-dom"; 
import { CartState } from "../contexts/Context"; 

export default function Cart() {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <>
      <div className="Cart" style={{ textAlign: "center", padding: "30px" }}>
        <h2>Your Cart</h2>
        {/* Mapping out the cart */}
        {cart.map((product) => (
          <div className="Cart-Items">
            <img src={product.image} alt="" /> 
            {/* <div classname="Cart-Details"> */}
                <p>{product.title}</p> 
                <p><b>Quantity:</b><br />{product.qty}</p> 
                <p><b>Price:</b><br />${product.price}</p> 
                <button
                    onClick={() => {
                        dispatch({ type: "REMOVE_FROM_CART", payload: product }); 
                    }} 
                    className="Remove-Button"
                    >
                    Remove
                </button> 
            {/* </div>  */}
          </div>
        ))} 
        <Link to="/checkout">
            <button
                // onClick={() => {
                //     dispatch({ type: "CLEAR_CART" });
                // }}
                className="Checkout-Button"
            >
                Checkout
            </button> 
        </Link>
      </div> 
    </> 
  ); 
} 