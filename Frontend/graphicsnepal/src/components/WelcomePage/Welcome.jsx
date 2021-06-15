import React,{useState} from 'react'
import {useHistory} from "react-router-dom"
import SeeWorks from '../SeeWorks/SeeWorks'
import TopRated from '../TopRatedProfessionals/TopRated'
import "./Welcome.css"

const Welcome = () => {
    const[srh,setSrh]=useState("")
    let history = useHistory();
    const searchHandler =(e)=>{
        e.preventDefault()
        if(srh!=="")
        history.push("/search/"+srh)
    }
    return (
        <>
        <div className="welcome">
            <section className="hero">
                <img src="intro.png" alt="hero pic of graphics nepal" />
            </section>
            <section className="welcome_text">
                <h1 className="bigHeading">Find out the best talent of Nepal</h1>
                <p>Nepal’s first platform for professional photographers and graphics designers </p>
                <form action="" className="searchForm" onSubmit={searchHandler}>
                <input required value={srh} type="text" placeholder="eg. logo designer, photographer.." onChange={(e)=>setSrh(e.target.value)}/>
                <button type="submit"><i className="fas fa-search"></i></button> 
                </form>
            </section>
        </div>


<TopRated/>

<SeeWorks/>

{/* <div className="whatItDoes">
<h2 >What it does?</h2>
</div> */}


<div className="welcome about">
<section className="welcome_text">
    <h1 className="bigHeading">Get on demand photography service</h1>
    <p>Get professional photographers for different events form your local area.</p>
</section>
<section className="hero">
    <img src="photo.png" alt="hero pic of graphics nepal" />
</section>
</div>


<div className="welcome about">
<section className="hero">
    <img src="design.png" alt="hero pic of graphics nepal" />
</section>

<section className="welcome_text">
    <h1 className="bigHeading">Hire best local designers</h1>
    <p>Browse the best graphics designer for your brand, projects and business. </p>
</section>
</div>





 </>
    )
}

export default Welcome
