import { combineReducers } from 'redux'; 
import userReducer from "./userReducer";
import userGuilds from "./userGuilds";
import userGuildsArray from "./userGuildsArray";
import userGuildsCommon from "./userGuildsCommon";
import userMe from "./userMe";
import expiresAt from "./expiresAt";
import loggedReducer from './isLoggedIn';


const allReducers = combineReducers({
    userReducer,
    userMe,
    userGuilds,
    userGuildsArray,
    expiresAt,
    userGuildsCommon,
    isLoggedIn: loggedReducer,
})

export default allReducers;