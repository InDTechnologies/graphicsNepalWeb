import React,{useState,useEffect} from 'react'
import { NavLink,useHistory } from 'react-router-dom'
import "./Signup.css"
import validator from 'validator';
import { useDispatch,useSelector } from 'react-redux';
import {setSuccessMessage} from "../../redux/actions/globalAction"

const Signup=()=> {

const globalData = useSelector(state=>state.global)

let history = useHistory()

useEffect(()=>{
  globalData.isLoggedIn&&history.push("/")
})

const dispatch = useDispatch();

const[load,setLoad]=useState(false)

const[step1,setStep]=useState(false)

const[job,setJob]=useState(0)

const[errorMessage,setErrorMessage]=useState("")

const[userDetails,setUserDetails]=useState({
  email:"",password:"",confirmPassword:"",fullName:"",location:"Kathmandu",workAs:""
})

const style={
  background:"#c4c4c493"
}


const handleSignup = async()=>{
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userDetails)
};

try{
const response = await fetch('/signup', requestOptions);
const data = await response.json();
setLoad(false)

if(!data.email){
history.push("/login")
dispatch(setSuccessMessage(data))
}

else{
  setErrorMessage(data.email)
}

}

catch(e){
  setLoad(false)
  console.log("catch er")
  console.log(e)
}

}

const stepOne=(e)=>{

  e.preventDefault()
  const em = validator.isEmail(userDetails.email)

  if(userDetails.email===""&&userDetails.password===""&&userDetails.confirmPassword===""){
     setErrorMessage("All fields are required")
  }
  else if(userDetails.email===""){
    setErrorMessage("Email is required")
  }
  else if(!em){
    setErrorMessage("Please enter a valid email")
  }
  else if(userDetails.password===""){
    setErrorMessage("Please set your passwprd")
  }
  else if(userDetails.password.length<6){
    setErrorMessage("Minimum password lenght is 6")
  } 
  else if(userDetails.confirmPassword===""){
    setErrorMessage("You need to confirm your password")
  }  
  else if(userDetails.password!==userDetails.confirmPassword){
    setErrorMessage("Both password doesnot match")
  }
  else{
    setErrorMessage("")
    setLoad(true)
    handleSignup()
  }
}



const submitHandler=(e)=>{
  e.preventDefault()
 
  if(userDetails.fullName===""&&userDetails.workAs===""){
    setErrorMessage("All fields are required")
 }
 else if(userDetails.fullName===""){
   setErrorMessage("Your name is required")
 }
 else if(userDetails.workAs===""){
   setErrorMessage("Please select what you want to work as")
 }
 else{
  setErrorMessage("")
  setLoad(true)
  setTimeout(()=>{
    setStep(!step1)
    setLoad(false)
  },2000)
 }
}



const setJobOne = ()=>{
  setJob(1)
  setUserDetails((p)=>{
    return {
      ...p,workAs:"Work as Freelancer"
    }
  })
}

const setJobTwo = ()=>{
  setJob(2)
  setUserDetails((p)=>{
    return {
      ...p,workAs:"Hire Freelancer"
    }
  })
}



const options = [
  { value: 'kathmandu', label: 'Kathmandu' },
  { value: 'lalitpur', label: 'Lalitpur' },
  { value: 'bhaktapur', label: 'Bhaktapur' },
  
]
    return (

      //classname is login as both have save ui

        <div className="login">
            <form>
              <div style={{"margin":"2rem 0"}}>
                  <h2 className="loginHead">Signup</h2>
                  <p className="quote"> Introduce yourself to Nepali freelance world </p>
              </div>

      {/* Error Message       */}
      {errorMessage? <p className="error_msg"><i className="fas fa-exclamation-circle" style={{"fontSize":"1.4rem","margin":" 0 10px"}}></i> {errorMessage}</p>:null}

    
        {/* STEP  SIGNUP */}

        {step1?

               <div className="stepOne">

          <div className="divFor">
                <i className="fas fa-user"></i>
                <input type="email" value={userDetails.email} onChange={(e)=>{
                  setUserDetails((prev)=>{
                    return {
                      ...prev,email:e.target.value
                    }
                  })
                }} className="inpStyle" placeholder="Your working email"/>
                </div> 
            
                <div className="divFor">
                 <i className="fas fa-lock"></i>
                <input type="password" value={userDetails.password} onChange={(e)=>{
                  setUserDetails((prev)=>{
                    return {
                      ...prev,password:e.target.value
                    }
                  })
                }} className="inpStyle" placeholder="New Password"/>
                </div>

                <div className="divFor">
                 <i className="fas fa-lock"></i>
                <input type="password" onChange={(e)=>{
                  setUserDetails((prev)=>{
                    return {
                      ...prev,confirmPassword:e.target.value
                    }
                  })
                }}  className="inpStyle" value={userDetails.confirmPassword} placeholder="Confirm password"/>
                </div>

                <div style={{"display":"flex","justifyContent":"center","alignItems":"center"}}>
                {load?  
                <div className="loader logg">
                </div>: 
                <input type="submit" value="Signup" className="roundbtn submit contBtn" onClick={stepOne}/>
                  }
                </div>
                <p style={{"textAlign":"center","margin":"10px 0"}}>Already have an account? <NavLink style={{"color":"var(--linkType)"}} to="/login">Login</NavLink></p>

          </div> :
                    <div className="stepTwo">

                    <div className="divFor">
                          <i className="fas fa-user"></i>
                          <input type="text" value={userDetails.fullName} onChange={(e)=>{
                  setUserDetails((prev)=>{
                    return {
                      ...prev,fullName:e.target.value
                    }
                  })
                }} className="inpStyle" placeholder="Your full name"/>
                          </div> 
                      
                        <div className="divFor">
                        <select  value={userDetails.location} onChange={(e)=>{
                     setUserDetails((prev)=>{
                    return {
                      ...prev,location:e.target.value
                    }
                  })
                }}>
                            {options.map((x)=> <option className="opt" key={x.value} value={x.value}>{x.label}</option>)}
                        </select>
                        </div>


                          <div className="selectPost">
                            <h3>What do you want?</h3>
                                <p style={job===1?style:null} onClick={setJobOne}> <span>Work as freelancer</span> {job===1? <span><i className="fas fa-check"></i></span>:null}  </p>
                                <p style={job===2?style:null} onClick={setJobTwo}> <span> Hire freelancer</span> {job===2? <span><i className="fas fa-check"></i></span>:null}</p>
                          </div>

                          <div style={{"display":"flex","justifyContent":"center"}}>
                            
                          {load?  <div className="loader">
                          </div>:  <input type="submit" value="Continue" className="roundbtn submit signBtn" onClick={submitHandler}/>
}
                          </div>

                          
                                <p style={{"textAlign":"center","margin":"10px 0"}}>OR Signup using</p>

                    <span style={{"display":"flex","justifyContent":"center"}}>
                    <button  className="loginBtn loginBtn--facebook su">
                            <NavLink to="/" style={{"color":"white"}}> Signup with Facebook</NavLink>
                            </button>

                            <button className="loginBtn loginBtn--google su">
                            <NavLink to="/" style={{"color":"white"}}>Signup with Google</NavLink>
                    </button>
                    </span>


                    <p style={{"textAlign":"center","margin":"10px 0"}}>Already have an account? <NavLink style={{"color":"var(--linkType)"}} to="/login">Login</NavLink></p>



                
                    </div>
        }

    {/*END OF STEP  SIGNUP */}
            </form>
        </div>
    )
}

export default Signup
