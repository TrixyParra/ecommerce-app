import ProductsList from "./ProductsList"; 
import useFetch from "./useFetch"; 

export default function Products() {
    // Destructure the properties 
    const { data: products, isLoading, error } = useFetch('https://fakestoreapi.com/products'); 

    return (
        <div>
            { error && <div className="Error-Message">{error}</div> } 
            { isLoading && <div className="Loading"></div> } 
            { products && <ProductsList products={products} title="All Products!" /> } 
        </div> 
    ); 
} 