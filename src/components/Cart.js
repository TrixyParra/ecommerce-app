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
          <div>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p> 
            <p>{product.qty}</p> 
            <button
              onClick={() => {
                dispatch({ type: "REMOVE_FROM_CART", payload: product }); 
              }}
            >
              X
            </button>
          </div>
        ))}
        <button
          onClick={() => {
            dispatch({ type: "CLEAR_CART" });
          }}
        >
          Checkout
        </button>
      </div>
    </>
  );
} 