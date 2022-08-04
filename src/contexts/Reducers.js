export const cartReducer = (state, action) => {
    // check for the action + or - 
    switch (action.type) {
        // reducer 
        case "ADD_TO_CART" : 
            return {
                ...state, 
                cart: [...state.cart, {...action.payload, qty: action.quantity || 1}]
            }; 
        case "REMOVE_FROM_CART" :
            return {
                ...state, 
                cart: state.cart.filter((c) => c.id !== action.payload.id)
            }; 
        case "CLEAR_CART" : 
            return {
                ...state, 
                cart: [] 
            }; 
    
        default:
            return state; 
    } 
};  