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
        <h2 style={{ marginBottom: "40px" }}>Your Cart</h2> 
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
        <div className="Cart-Total">
          <h3>Total:</h3> 
          <h3>${cart.reduce((acc, product) => acc + product.qty * product.price, 0).toFixed(2)}</h3> 
        </div> 
        
        <Link to="/checkout">
            <button
                className="Checkout-Button"
            >
                Checkout
            </button> 
        </Link> 
      </div> 
    </> 
  ); 
} 