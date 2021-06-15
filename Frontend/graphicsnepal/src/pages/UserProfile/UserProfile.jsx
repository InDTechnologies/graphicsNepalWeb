import React,{useState,useEffect} from 'react'
import "./UserProfile.css"
import {NavLink,useHistory} from 'react-router-dom'
import TopRatedCard from '../../components/TopRatedProfessionals/TopRatedCard'
import Masonry from 'react-masonry-css'
import ProfileForm from '../Forms/ProfileForm'
import ServicePost from '../Forms/ServicePost'
import EducationForm from '../Forms/EducationForm'
import SkillsForm from '../Forms/SkillsForm'
import DescriptionForm from '../Forms/DescriptionForm'
import { useSelector } from 'react-redux';




const UserProfile=()=> {

    const globalData = useSelector(state=>state.global)

    const{name,email,location,skills,uploads,id,degree,userDesc,workTitle,role} = globalData.userInfo;

    let history = useHistory()

    const[tab,setTab]=useState({
        tab1:true,tab2:false,tab3:false
    })

    const[load,setLoad]=useState(false)

    const[forms,setForms]=useState({
        profileFm:false,serviceFm:false,eduForm:false,skillsForm:false,descForm:false
    })

    const[info,setInfo]=useState({
        services:true,
        portfolio:false,
        history:false
    })

    const[maxi,setMaxi]=useState(false)

    const[skill,setSkill]=useState(["Photoshop","Logo Design","Video Editing","Videography","UI/UX"])

    const[edu,setEdu]=useState("Bsc. Computer Science")

    const[description,setDescription]=useState("Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design. Exceptional collaborative and interpersonal skills.")

    const breakpointColumnsObj = {
        default: maxi?3:2,
      };

    const setWhichTab = (x)=>{
       
        setLoad(true)

        if(x===1){
            setTab({tab1:true,tab2:false,tab3:false})
            setTimeout(()=> setLoad(false),1000)
        }
        
        if(x===2){
            setTab({tab1:false,tab2:true,tab3:false})
            setTimeout(()=> setLoad(false),1000)
        }

        if(x===3){
            setTab({tab1:false,tab2:false,tab3:true})
        setTimeout(()=> setLoad(false),1000)
        }
    }

    const cancelAll = ()=>{
        setForms({
        profileFm:false,serviceFm:false,eduForm:false,skillsForm:false,descForm:false
        })
    }
    return (
        <div className="userDiv">


         <section className="userInfo" style={{"display":maxi?"none":"block"}}>

             <p className="editPP editP" onClick={()=>{
                 setForms((p)=>{
                     return {
                         ...p,profileFm:!p.profileFm
                     }
                 })
             }}>Edit Profile</p>



             <section className="userNamePic">
                <div className="profileImg">
                 </div>

                <span className="nameU">
                 <h2>{name}</h2>
                 <p style={{"margin":"3px 0"}}>{workTitle}</p>
                 <p className="location"><i className="fas fa-map-marker-alt"></i>{location}</p>
                </span>

             </section>


            <h3 className="dT"> <span>Description</span> <span onClick={()=>{
                 setForms((p)=>{
                     return {
                         ...p,descForm:!p.descForm
                     }
                 })
             }} ><i className="fas fa-pencil-alt"></i></span> </h3>
             <p className="description">
             {userDesc!==""?userDesc:<p style={{"color":"rgba(0,0,0,0.6)"}}>Add description about yourself</p>}
             </p>


            <h3 className="dT"> <span >Skills</span> <span onClick={()=>{
                 setForms((p)=>{
                     return {
                         ...p,skillsForm:!p.skillsForm
                     }
                 })
             }}><i className="fas fa-pencil-alt"></i></span> </h3>

            <div className="skillsList">

                {skills.length!==0? skills.map((x)=> <p className="chip-skills" key={x}>{x}</p>):<p style={{"color":"rgba(0,0,0,0.6)"}}>Showcase your skills here</p>}
           
            </div>


            <h3 className="dT"> <span>Education</span>   <span onClick={()=>{
                setForms((p)=>{
                    return{
                        ...p,eduForm:!p.eduForm
                    }
                })
            }}><i className="fas fa-pencil-alt"></i></span></h3>

         {degree!==""?degree:<p style={{"color":"rgba(0,0,0,0.6)"}}>Your latest degree here</p>}


         </section>


 <section className="tabSection">

             {forms.skillsForm&&<SkillsForm cancel={cancelAll} />}
             {forms.descForm&&<DescriptionForm cancel={cancelAll} />}
            {forms.eduForm&& <EducationForm cancel={cancelAll}/>}
            {forms.profileFm&&<ProfileForm cancel={cancelAll}/>}
             {forms.serviceFm&&<ServicePost cancel={cancelAll}/>}

       {!maxi&& <i className="fas fa-compress makebig" onClick={()=>setMaxi(!maxi)}></i>}
       {maxi&&  <i className="fas fa-window-minimize makebig" onClick={()=>setMaxi(!maxi)}></i>}
   <div className="tabInfo">
       <h3 onClick={()=>setWhichTab(1)} className={tab.tab1?"myser":null}>Services</h3>
       <h3 onClick={()=>setWhichTab(2)} className={tab.tab2?"myport":null}>Works</h3>
       <h3 onClick={()=>setWhichTab(3)} className={tab.tab3?"myhist":null}>History</h3>
   </div>

   <div className="actualTabs" style={ load? {"display":"flex","justifyContent":"center","alignItems":"center","marginTop":"6rem"}:null}>

   {load?  <div className="loader uLoad"></div>:<div>


                    {tab.tab1&& <div className={!info.services?"makeflex one":"one"} >

                    {!info.services?
                    
                       <div className="inner"> 
                      <i className="far fa-question-circle help"></i>
                      <lottie-player src="https://assets1.lottiefiles.com/private_files/lf30_ngjk4cxr.json" speed="1"  style={{"background":"transparent","width":"100px","height":"100px","marginTop":"2rem"}}  loop  autoplay></lottie-player>
                      <p style={{"margin":"15px 0"}}>Writing the services you offer can help you to get a job.</p>
                      <p className="editPP" onClick={()=>{
                 setForms((p)=>{
                     return {
                         ...p,serviceFm:!p.serviceFm
                     }
                 })
             }}>Add Services</p>
                      </div>
                        :
                        <div style={{"position":"relative"}}>
                     <h2 style={{"margin":"3rem 0"}}>My Offered Services</h2>
                      <p className="editPP" style={{"width":"fit-content","position":"absolute","top":"0px","right":"10px"}} onClick={()=>{
                          console.log(123)
                 setForms((p)=>{
                     return {
                         ...p,serviceFm:!p.serviceFm
                     }
                 })
             }}>Post Services</p>
                    <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid serviceGig"
                    columnClassName="my-masonry-grid_column">
                    
                    <TopRatedCard offer={{img:"https://images.unsplash.com/photo-1612810806695-30f7a8258391?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",title:"Logo design at Rs. 999"}}/>
                    <TopRatedCard offer={{img:"https://images.unsplash.com/photo-1542744094-3a31f272c490?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",title:"Web design within 3 days"}}/>
                    <TopRatedCard offer={{img:"https://images.unsplash.com/photo-1603901985879-887f435c7d4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",title:"Get visiting card for your business "}}/>
                    <TopRatedCard offer={{img:"https://images.unsplash.com/photo-1559661184-5abf47a433a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80",title:"Photoghapher for 1 day event at Rs. 20000"}}/>
                    <TopRatedCard offer={{img:"https://images.unsplash.com/photo-1603901985879-887f435c7d4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",title:"Get visiting card for your business "}}/>

                    </Masonry>


                        <div className="serviceDiv">
                        </div>

                       
                        </div>
                    }


                  </div>}


                        {tab.tab2&& <div className={!info.portfolio?"makeflex two":"two"}>

                        {!info.portfolio?
                       <div className="inner" style={{"marginTop":"6rem"}}> 
                      <p style={{"margin":"15px 0"}}>Showcase you works and get hired.</p>
                      <p className="editPP">Upload Design/Photos</p>
                      </div>
                        :
                        <h1>My Portfolio</h1>
                    }

                        </div>}

                        {tab.tab3&& <div className={!info.history?"makeflex three":"three"}>

                        {!info.history?
                       <div className="inner" style={{"marginTop":"6rem"}}> 
                      <p style={{"margin":"15px 0"}}>No, jobs done yet.</p>
                      <p className="editPP">Find Work</p>
                      </div>
                        :
                        <h1>My Portfolio</h1>
                    }

                    </div>}
                    </div>
}
       
           

   </div>
        

         </section>


            
        </div>
    )
}

export default UserProfile
