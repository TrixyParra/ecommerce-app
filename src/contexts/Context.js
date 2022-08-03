import { createContext, useContext, useReducer } from "react";
import useFetch from "../components/useFetch";
import { cartReducer } from "./Reducers";

const Cart = createContext(); 

const Context = ({children}) => {
    const { data: products } = useFetch('https://fakestoreapi.com/products'); 
    
    // useReducer for more complex state logic 
    const [ state, dispatch ] = useReducer(cartReducer, {
        products: products, 
        cart: []
    }); 

    return (
        <Cart.Provider value={{state, dispatch}}>{children}</Cart.Provider> 
    ); 
}; 

export default Context; 

export const CartState = () => {
    return useContext(Cart); 
}; 