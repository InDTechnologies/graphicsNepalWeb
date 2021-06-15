import {globalActionTypes} from "../actionTypes/globalActionTypes"


export const setSuccessMessage = (msg)=>{
    return{
        type:globalActionTypes.SUCCESS_MESSAGE,
        payload:{msg}
    }
}

export const seterrorMessage = (msg)=>{
    return{
        type:globalActionTypes.ERROR_MESSAGE,
        payload:{msg}
    }
}


export const systemLoading = (value)=>{
    return{
        type:globalActionTypes.SYSTEM_LOADING,
        payload:{value}
    }
}

export const changeUserAuth = ()=>{
    return{
        type:globalActionTypes.IS_AUTHENTICATED,
    }
}

export const setUserInfo = (userInfo)=>{
    return{
        type:globalActionTypes.SET_USER_INFO,
        payload:{userInfo}
    }
}


export const checkUserAuth = ()=>async (dispatch)=>{

    dispatch(systemLoading(true))

   try{
    const res = await fetch("/test");
    const data = await res.json();

    if(data!=="error" && data!=="janne hunxas"){
        console.log("Authenticated")
        dispatch(setUserInfo(data))
        dispatch(changeUserAuth())
        dispatch(systemLoading(false))
    }
    else{
        console.log("Not Authenticated")
        console.log(data)
        dispatch(systemLoading(false))
    }

   }
   catch(e){
       dispatch(systemLoading(false))
       console.log("Cannot fetch data")
   }

}