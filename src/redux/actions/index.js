// In actions - tell what we want 

export const addItem = (product) => {
    return {
        type: "ADDITEM", 
        payload : product 
    }; 
} 

export const deleteItem = (product) => {
    return {
        type: "DELETEIEM", 
        payload : product 
    } 
} 