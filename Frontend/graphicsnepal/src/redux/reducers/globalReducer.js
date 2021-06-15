import {globalActionTypes} from "../actionTypes/globalActionTypes"


const initialData = {
    success:"",
    error:"",
    loading:false,
    isLoggedIn:false,
    userInfo:{
        skills:[]
    }
}

const globalReducer = (state=initialData,action)=>{

    switch(action.type){

    case globalActionTypes.SUCCESS_MESSAGE:
        return {
            ...state,success:action.payload.msg
        }

    case globalActionTypes.ERROR_MESSAGE:
        return {
            ...state,error:action.payload.msg
        }

  
    case globalActionTypes.SYSTEM_LOADING:
        return{
            ...state,loading:action.payload.value
        }

    case globalActionTypes.IS_AUTHENTICATED:
        return{
            ...state,isLoggedIn:!state.isLoggedIn
        }
    
        case globalActionTypes.SET_USER_INFO:
            return{
                ...state,userInfo:action.payload.userInfo
            }
    
    default:
        return state

    }
}


export default globalReducer