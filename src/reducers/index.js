import {combineReducers} from "redux";
import muppetsReducer from "./muppetsReducer.js"


const kingReducer = combineReducers({
    muppets: muppetsReducer
});

export default kingReducer;
