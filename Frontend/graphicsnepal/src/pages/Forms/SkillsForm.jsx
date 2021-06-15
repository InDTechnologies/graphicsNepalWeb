import React,{useState} from 'react'
import "./Form.css"

const SkillsForm=({cancel})=> {
    const[load,setLoad]=useState(false)
    const[errorMessage,setErrorMessage]=useState("")

    const[edu,setEdu]=useState("")

    const[skills,setSkills]=useState(["Photoshop","Logo Design","Video Editing","Videography","UI/UX"])


      const handleSubmit = (e)=>{

        e.preventDefault()

        if(edu!==""){
            setSkills((p)=>{
                return[...p,edu]
            })
            setEdu("")
        }
      }

      const filterSkill=(skill)=>{
        setSkills(skills.filter((x)=>x!==skill))
      }


    return (
        <div className="formWidthH login">

<form action="/">

<div style={{"margin":"2rem 0"}}>
    <p className="loginHead">Set Your Skills</p>
</div>

{errorMessage? <p className="error_msg"><i className="fas fa-exclamation-circle" style={{"fontSize":"1.4rem","margin":" 0 10px"}}></i> {errorMessage}</p>:null}

<div className="skillsList">

    {skills.map((skill)=> <p className="chip-skills" key={skill}> <span>{skill}</span> <span onClick={()=>filterSkill(skill)}><i className="fas fa-times"></i></span> </p>)}

</div>

  <div className="divFor">
  <i className="fas fa-search"></i>
  <input type="email" className="inpStyle" placeholder="Add your skills (photographer,designer)" value={edu} onChange={(e)=>{
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

export default SkillsForm
