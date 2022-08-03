// adding them in rootReducers 

import { addItem } from "../actions"; 
import { combineReducers } from "redux"; 

const rootReducers = combineReducers({
    addItem
}); 

export default rootReducers; 