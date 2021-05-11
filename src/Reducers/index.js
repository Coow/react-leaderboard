import { combineReducers } from 'redux'; 
import userReducer from "./userReducer";
import userGuilds from "./userGuilds";
import userMe from "./userMe";
import loggedReducer from './isLoggedIn';


const allReducers = combineReducers({
    userReducer,
    userMe,
    userGuilds,
    isLoggedIn: loggedReducer,
})

export default allReducers;