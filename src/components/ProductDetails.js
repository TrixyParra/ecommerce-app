//import { useState } from "react"; 
import { useParams } from "react-router-dom"; 
import useFetch from "./useFetch"; 

export default function ProductDetails() {
    // Grab Route parameter (id) from the Route to fetch the product from the id 
    const { id } = useParams(); 
    const { data: product, isLoading, error } = useFetch('https://fakestoreapi.com/products/' + id); 
    // const [ itemQuantity, setItemQuantity ] = useState("1"); 

    return (
        <>
            <article className="Product-Details">
                { isLoading && <div className="Loading-Wrapper"><div className="Loading"></div></div> } 
                { error && <div className="Error-Message">{ error }</div> } 
                { product && (
                    <div className="Product-Card">
                        <img src={product.image} alt="" /> 
                        <div className="Product-Description">
                            <h2>{ product.title }</h2> 
                            <p><b>Rated: </b> { product.rating && product.rating.rate } <b>by (</b>{ product.rating && product.rating.count }<b>) reviewers!</b></p> 
                            <p style={{ color: "limegreen", fontWeight: "bold", fontSize: "22px" }}>${ product.price }</p> 
                            <p><b>Category:</b> { product.category }</p> 
                            <p><b>Product Description:</b> { product.description }</p> 
                            <input type="number" id="quantity" name="quantity" min="1" max="10" defaultValue="1"></input> 
                            <button>Add to Cart</button> 
                        </div> 
                    </div> 
                )} 
            </article> 
        </> 
    ); 
} 