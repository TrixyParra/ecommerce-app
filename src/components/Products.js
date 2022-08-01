import ProductsList from "./ProductsList"; 
import useFetch from "./useFetch"; 

export default function Products() {
    // Destructure the properties 
    const { data: products, isLoading, error } = useFetch('https://fakestoreapi.com/products'); 

    return (
        <div className="Home">
            { error && <div>{error}</div> } 
            { isLoading && <div className="Loading"></div> } 
            { products && <ProductsList products={products} title="All Products!" /> } 
        </div> 
    ); 
} 