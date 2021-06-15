import React, { useEffect,useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import "./Form.css"

const ServicePost=({cancel})=> {
    const[load,setLoad]=useState(true)
    const[errorMessage,setErrorMessage]=useState("")
    const [value, setValue] = useState("");

    const[sv,serSv]=useState({
        img:"",title:"",desc:"",
      })

      const handleSubmit = (e)=>{

      }


    return (
        <div className="formWidthH login serV">

<form action="/">

<div style={{"margin":"2rem 0"}}>
    <p className="loginHead">Post Offer/Service</p>
    {/* <p className="quote">Login and start making money </p> */}
</div>

{errorMessage? <p className="error_msg"><i className="fas fa-exclamation-circle" style={{"fontSize":"1.4rem","margin":" 0 10px"}}></i> {errorMessage}</p>:null}

  <div className="divFor">
  <i className="fas fa-user"></i>
  <input type="text" className="inpStyle" placeholder="Title of service" value={sv.title} onChange={(e)=>{
      serSv((prev)=>{
          return{
              ...prev,title:e.target.value
          }
      })
  }}/>
  </div> 

  <Editor
         apiKey="xdsqa4frzrfl7am7cpgre2vvdxke0fa9p7qmmdkkm47nm5i7"
         value={value}
         onEditorChange={(newValue, editor) => setValue(newValue)}
         init={{
           height: 300,
           menubar: true,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
         }}
       />

  <div style={{"display":"flex","justifyContent":"center"}}>

  {load?  <div className="loader logg">
            </div>: <input type="submit" value="Post" className="roundbtn submit" onClick={handleSubmit}/>}
  </div>

  <div>
      <p style={{"textAlign":"center","marginTop":"1rem"}} className="cancel" onClick={()=>cancel()}>Cancel</p>
  </div>



  
</form>

            
        </div>
    )
}

export default ServicePost
