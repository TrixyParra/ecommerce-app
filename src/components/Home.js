export default function Home() {

    return (
        <>
            <header className="Home-Header"></header> 

            <div className="Slogan">
                <h2>Everything you need,<br></br>For You!</h2>
            </div> 

            <div className="Categories">
                <h2>Bringing you the latest in a variety of categories to shop from!</h2>
                <div className="Womens">
                    <h3>Women's Clothing</h3> 
                </div> 
                <div className="Mens">
                    <h3>Men's CLothing</h3> 
                </div> 
                <div className="Jewelery">
                    <h3>Jewelery</h3> 
                </div> 
                <div className="Electronics">
                    <h3>Electronics</h3> 
                </div> 
                <button>Start Shopping</button> 
            </div> 

            <div className="Mailing-List">
                <h3>Join our Mailing List!</h3> 
                <p>Stay in the loop for exclusive deals and the first to know about our new arrivals.</p> 
                <input type="email" /> 
                <button>Join</button> 
            </div> 
        </> 
    ); 
} 