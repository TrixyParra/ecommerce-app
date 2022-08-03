// import { useSelector, useDispatch } from 'react-redux';
// import { deleteItem } from '../redux/actions'; 

export default function Cart() {

    return (
        <>
            <div className="Cart" style={{ textAlign: "center", padding: "30px" }}>
                <h2>Your Cart</h2> 
                <div className="Cart-Items">
                    <img src="" alt="" /> 
                    <h3>Product: </h3> 
                    <p>Price: </p> 
                    <p>Quantity: </p> 
                    <p>Total: </p> 
                </div> 
            </div> 
        </> 
    ); 
} 





// export default function Cart() {
//     const state = useSelector((state) => state.addItem); 
//     const dispatch = useDispatch(); 
//     const cartItems = (cartItem) => {
//         return (
//             <>
//                 <button>Close</button> 
//                 <h3>{cartItem.title}</h3> 
//                 <p></p>
//             </>
//         ); 
//     }; 

//     return (
//         <>
//             { state.length !== 0 && state.map(cartItems) } 
//             <div className="Cart">
//                 <h2>Your Cart</h2> 
//                 <div className="Cart-Items">
                    
//                 </div>
//             </div> 
//         </> 
//     ); 
// } 