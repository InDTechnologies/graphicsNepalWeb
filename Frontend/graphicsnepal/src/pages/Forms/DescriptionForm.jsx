import React,{useState} from 'react'
import "./Form.css"

const DescriptionForm=({cancel})=> {
    const[load,setLoad]=useState(false)
    const[errorMessage,setErrorMessage]=useState("")

    const[edu,setEdu]=useState("")

      const handleSubmit = (e)=>{

      }
    return (
        <div className="formWidthH login">

<form action="/">

<div style={{"margin":"2rem 0"}}>
    <p className="loginHead">Set Your Description</p>
</div>

{errorMessage? <p className="error_msg"><i className="fas fa-exclamation-circle" style={{"fontSize":"1.4rem","margin":" 0 10px"}}></i> {errorMessage}</p>:null}

  <div className="divFor">
  <i className="fas fa-angle-double-right"></i>
  <input type="email" className="inpStyle" placeholder="Your description.." value={edu} onChange={(e)=>{
      setEdu(e.target.value)
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

export default DescriptionForm
