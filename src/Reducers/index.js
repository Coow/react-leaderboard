import { combineReducers } from 'redux'; 
import userReducer from "./userReducer";
import loggedReducer from './isLoggedIn';


const allReducers = combineReducers({
    userReducer,
    isLoggedIn: loggedReducer,
})

export default allReducers;