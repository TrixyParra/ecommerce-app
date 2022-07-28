export default function ProductsList({ products, title }) {
    // const products = props.products; 
    // const title = props.title; 

    return (
        <>
            <h2>{ title }</h2>
            <div className="Products-List">
                {products.map((product) => {
                    return ( 
                        <div className="Product-Preview" key={product.id}>
                            <img src={product.image} alt="" /> 
                            <h4>{ product.title }</h4> 
                            <p>${ product.price }</p> 
                            <button>View Item</button> 
                        </div> 
                    );    
                })} 
            </div> 
        </>
    );    
} 