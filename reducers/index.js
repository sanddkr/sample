import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

import reposReducer from "./repoReducer";
// import userReducer from "./userReducer";

const rootReducer  = combineReducers({
    att: reposReducer, 
    routing: routerReducer
});

export default rootReducer;