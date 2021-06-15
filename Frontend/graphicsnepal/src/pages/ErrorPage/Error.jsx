import React from 'react'
import {NavLink} from "react-router-dom"
import "./Error.css"

function Error() {
    return (
        <div className="ErrorPage">
<lottie-player src="https://assets2.lottiefiles.com/datafiles/mVuaYzsV6mwoEwK/data.json"  style={{"background":"transparent","width":"300px","height":"300px"}}  loop  autoplay></lottie-player>
        <p>Looks like you are lost</p>
         <NavLink className="rectbtn" to="/"><h1>Go back to Homes</h1></NavLink>
            
        </div>
    )
}

export default Error
