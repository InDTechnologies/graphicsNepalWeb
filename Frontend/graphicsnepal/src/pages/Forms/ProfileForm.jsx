import React,{useState} from 'react'
import "./Form.css"

const ProfileForm=({cancel})=> {
    const[load,setLoad]=useState(false)
    const[errorMessage,setErrorMessage]=useState("")

    const[profile,setProfile]=useState({
        name:"",title:"",location:"",
      })

      const handleSubmit = (e)=>{

      }
    return (
        <div className="formWidthH login">

<form action="/">

<div style={{"margin":"2rem 0"}}>
    <p className="loginHead">Update Profile</p>
    {/* <p className="quote">Login and start making money </p> */}
</div>

{errorMessage? <p className="error_msg"><i className="fas fa-exclamation-circle" style={{"fontSize":"1.4rem","margin":" 0 10px"}}></i> {errorMessage}</p>:null}

  <div className="divFor">
  <i className="fas fa-user"></i>
  <input type="email" className="inpStyle" placeholder="Your name here" value={profile.name} onChange={(e)=>{
      setProfile((prev)=>{
          return{
              ...prev,name:e.target.value
          }
      })
  }}/>
  </div> 
  
   <div className="divFor">
   <i className="fas fa-user"></i>
  <input type="text" className="inpStyle" placeholder="Your job title" value={profile.title} onChange={(e)=>{
      setProfile((prev)=>{
          return{
              ...prev,title:e.target.value
          }
      })
  }}/>
  </div>

  <div className="divFor">
  <i className="fas fa-map-marker-alt"></i>
  <input type="text" className="inpStyle" placeholder="Your location here" value={profile.location} onChange={(e)=>{
      setProfile((prev)=>{
          return{
              ...prev,location:e.target.value
          }
      })
  }}/>
  </div>

  <div style={{"display":"flex","justifyContent":"center"}}>
  {load?  <div className="loader logg">
            </div>:  <input type="submit" value="Update" className="roundbtn submit" onClick={handleSubmit}/>}

  </div>

  <div>
      <p style={{"textAlign":"center","marginTop":"1rem"}} className="cancel" onClick={()=>cancel()}>Cancel</p>
  </div>


  
  
</form>

            
        </div>
    )
}

export default ProfileForm
