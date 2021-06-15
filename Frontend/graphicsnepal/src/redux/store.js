import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import Thunk from 'redux-thunk'


async function check(){
    try{
        const res = await fetch("/test");
        const data = await res.json();
    
        if(data!=="error" && data!=="Muji janne hunxas"){
            return true
        }
        else{
            return false

        }
    
       }
       catch(e){
        return false

       }
}


const initialState = {
    
    global:{
        userInfo:[],

    }
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(Thunk)));

export default store;