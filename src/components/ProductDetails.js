import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

export default function ProductDetails() {
    // Grab Route parameter (id) from the Route to fetch the product from the id 
    const { id } = useParams(); 
    const { data: product, isLoading, error } = useFetch('https://fakestoreapi.com/products/' + id); 

    return (
        <>
            <article className="Product-Details">
                { isLoading && <div>Loading...</div> } 
                { error && <div>{ error }</div> } 
                { product && (
                    <div className="Product-Card">
                        <img src={product.image} alt="" /> 
                        <div className="Product-Description">
                            <h2>{ product.title }</h2> 
                            <p><b>Category:</b> { product.category }</p> 
                            <p>${ product.price }</p> 
                            {/* <p>{product.rating}</p>  */}
                            <p><b>Product Description:</b> { product.description }</p> 
                            <button>Add to Cart</button> 
                        </div> 
                    </div> 
                )} 
            </article> 
        </>         
    ); 
} 