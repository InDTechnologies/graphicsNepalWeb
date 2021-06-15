import React,{useState,useEffect} from 'react'
import { NavLink,useHistory } from 'react-router-dom'
import validator from 'validator'
import { useSelector } from 'react-redux';
import "./Login.css"


const Login=()=> {
    const globalData = useSelector(state=>state.global)

    let history = useHistory()

    useEffect(()=>{
        console.log(123)
        console.log(globalData.isLoggedIn)
        if(globalData.isLoggedIn){
            console.log(456)
            history.push("/user/profile")
        }
    },[history])



    const[load,setLoad]=useState(false)
    const[errorMessage,setErrorMessage]=useState("")
    const[showverified,setShowVerified]=useState(false)

    const[loginDetails,setLoginDetails]=useState({
        email:"",password:""
      })

     
      
    const handleLogin=async (e)=>{

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginDetails)
        };

      e.preventDefault()

      if(loginDetails.email===""&&loginDetails.password===""){
          setErrorMessage("Email and password is required")
      }
      else if(loginDetails.email===""){
        setErrorMessage("Email is required")
      }
      else if(!(validator.isEmail(loginDetails.email))){
        setErrorMessage("Invalid email")
      }
      else if(loginDetails.password===""){
        setErrorMessage("Password is required")
      }
      else{
          setErrorMessage("")
          setLoad(true)
          try{
            const response = await fetch('/login', requestOptions);
            const data = await response.json();
            if(data==="Logged In Successfully"){
                setLoginDetails({
                    email:"",password:""
                })
                    // history.push("/user/profile")
                    setShowVerified(false)
            }
            else if(data.err==="Please verify your email"){
                setShowVerified(true)
                setLoginDetails({
                    email:"",password:""
                })
            }
            else{
                setErrorMessage("Email or password is wrong")
            }
            setLoad(false)
            }
            
            catch(e){
              setLoad(false)
              console.log(e)
            }
      }
    }

  

    return (
        <div className="login">
   
   {globalData.loading?<h1>Loading</h1>:null}

            <form action="/">

              <div style={{"margin":"2rem 0"}}>
                  <h2 className="loginHead">Login</h2>
                  <p className="quote">Login and start making money </p>
              </div>

              {errorMessage? <p className="error_msg"><i className="fas fa-exclamation-circle" style={{"fontSize":"1.4rem","margin":" 0 10px"}}></i> {errorMessage}</p>:null}
              {showverified? <p className="error_msg"><i className="fas fa-exclamation-circle" style={{"fontSize":"1.4rem","margin":" 0 10px"}}></i> Please verify your email <br /><p className="spam">Check spam folder if you didnot get email</p></p>:null}
              {globalData.success!=="" ? <p className="error_msg success_msg"> <i className="fas fa-check" style={{"fontSize":"1.4rem","margin":" 0 10px"}}></i> {globalData.success}</p>:null}

                <div className="divFor">
                <i className="fas fa-user"></i>
                <input type="email" className="inpStyle" placeholder="Your email here" value={loginDetails.email} onChange={(e)=>{
                    setLoginDetails((prev)=>{
                        return{
                            ...prev,email:e.target.value
                        }
                    })
                }}/>
                </div> 
                
                 <div className="divFor">
                 <i className="fas fa-lock"></i>
                <input type="password" className="inpStyle" placeholder="Your password here" value={loginDetails.password} onChange={(e)=>{
                    setLoginDetails((prev)=>{
                        return{
                            ...prev,password:e.target.value
                        }
                    })
                }}/>
                </div>

                <div className="fpass">
                    <NavLink to="/">Forget password?</NavLink>
                </div>

                <div style={{"display":"flex","justifyContent":"center"}}>
                {load?  <div className="loader logg">
                          </div>: <input type="submit" value="Login" className="roundbtn submit" onClick={handleLogin}/>}
                </div>

               


                <p style={{"textAlign":"center","margin":"10px 0"}}>OR Login using</p>

               <span style={{"display":"flex","justifyContent":"center"}}>
               <button  className="loginBtn loginBtn--facebook">
                       <NavLink to="/" style={{"color":"white"}}> Login with Facebook</NavLink>
                        </button>

                        <button className="loginBtn loginBtn--google">
                        <NavLink to="/" style={{"color":"white"}}>Login with Google</NavLink>
                </button>
               </span>


                <p style={{"textAlign":"center","margin":"10px 0"}}>Don't have an account? <NavLink style={{"color":"var(--linkType)"}} to="/signup">Signup</NavLink></p>


                
                
            </form>


            
        </div>
    )
}

export default Login
