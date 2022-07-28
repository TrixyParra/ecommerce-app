// Custom Hook - Makes it reusable 

import { useEffect, useState } from "react"; 


const useFetch = (url) => {
    // const [products, setProducts] = useState(null);   - change to data to be reusable in other components 
    const [data, setData] = useState(null); 
    const [isLoading, setIsLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        fetch(url) 
            .then(res => {
                // If Error caught after connection to server, an Error message will display 
                if (!res.ok) {
                    throw Error('Could not fetch the data from resource') 
                } 
                return res.json(); 
            }) 
            .then(data => {
                console.log(data); 
                setData(data); 
                setIsLoading(false); 
                setError(null); 
            }) 
            // Catch a Connection/Network Error 
            .catch(err => {
                console.log(err.message); 
                setError(err.message);  // * will display a network error or any error message 
                setIsLoading(false); 
            }) 
    }, [url]); 

    // Return the values - as an object with the 3 properties to be able to grab these properties from this hook in a fetch request in another component. Order won't matter when destructuring them. 
    return { data, isLoading, error } 
} 

export default useFetch; 





// .then(json => {
            //     console.log(json); 
            //     setProducts(json); 
            //     setIsLoading(false); 
            // }) 