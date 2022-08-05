import { Link } from "react-router-dom"; 

export default function ProductsList({ products, title }) {
    // const products = props.products; 
    // const title = props.title; 

    return (
        <>
            <header className="Shop-Header"></header> 
            <h2 className="Shop-Title">{ title }</h2> 
            <div className="Products-List">
                {products.map((product) => {
                    return ( 
                        <div className="Product-Preview" key={product.id}>
                            <img src={product.image} alt="" /> 
                            <h4>{ product.title.substring(0, 12) } ...</h4> 
                            <p>${ product.price.toFixed(2) }</p> 
                            <Link to={`/shop/${product.id}`}>
                                <button>View Item Details</button> 
                            </Link> 
                        </div> 
                    ); 
                })} 
            </div> 
        </> 
    ); 
} 