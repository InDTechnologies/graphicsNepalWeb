import { combineReducers } from "redux";
import globalReducer from "./reducers/globalReducer";


const rootReducer = combineReducers({
    global:globalReducer
});

export default rootReducer;