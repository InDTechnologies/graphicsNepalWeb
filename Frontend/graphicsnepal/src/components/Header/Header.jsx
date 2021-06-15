import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import "./Header.css"
import { useSelector,useDispatch } from 'react-redux';
import {changeUserAuth} from "../../redux/actions/globalAction"
import img from "../Group.png"

const Header = () => {

    const globalData = useSelector(state=>state.global)

    const dispatch = useDispatch();


    const[menu,setMenu]=useState(true)

    const checkMenu=()=>{
        setMenu(!menu)
    }

    const logout =async ()=>{
        checkMenu()
        try{
            const res = await fetch("/logout");
            const data = await res.json()
            dispatch(changeUserAuth())
            console.log(data)
        }
        catch(e){}

    }

    return (
        <>
        <nav>

            <div className="logo">
               <img src={img} alt="logo of graphics nepal" />
              <NavLink to="/"> <h1>graphicsnepal</h1></NavLink> 
            </div>

            <div className="navigation">

                <ul className="nav_lists">
                    <li> <NavLink to="/">Find Work</NavLink> </li>
                    <li> <NavLink to="/">Hire Freelancers</NavLink> </li>
                    <li> <NavLink to="/">How It Works</NavLink> </li>
                    <li> <NavLink to="/">Blog</NavLink> </li>
                </ul>

            </div>


            <div className="login_signup">

            {
                    globalData.isLoggedIn?
                    <div style={{"display":"flex","alignItems":"center"}}>
                        <NavLink onClick={()=>checkMenu} className="signupbtn" to="/user/profile"> <p className="">Hey, Suman</p></NavLink>
                        <p onClick={()=>checkMenu}> <span className="roundbtn loginbtn">Logout</span></p>
                    </div>:
                    <div style={{"display":"flex","alignItems":"center"}}>
                    <NavLink onClick={()=>checkMenu} className="signupbtn" to="/signup"> <p className="">Signup</p></NavLink>
                    <NavLink onClick={()=>checkMenu} to="/login"> <p className="roundbtn loginbtn">Login</p></NavLink>
                    </div>
            }

            </div>
        </nav>


        <div className="smallMenu">


        <section className="miniHeader">
        <div className="logo">
               <img src={img} alt="logo of graphics nepal" />
               <NavLink to="/"><h1>graphicsnepal</h1></NavLink> 
        </div>


            <div className="smallNav" onClick={checkMenu}>
                {menu?<i className="fas fa-bars"></i> : <i className="fas fa-times"></i> }
            </div> 
            </section> 

       {menu?null:(
           <div className="navigation">

                    <ul className="nav_lists">
                        <li onClick={checkMenu}> <NavLink to="/">Find Work</NavLink> </li>
                        <li onClick={checkMenu}> <NavLink to="/">Hire Freelancers</NavLink> </li>
                        <li onClick={checkMenu}> <NavLink to="/">How It Works</NavLink> </li>
                        <li onClick={checkMenu}> <NavLink to="/">Blog</NavLink> </li>
                    </ul>


                    <div className="login_signup">

                    {
                    globalData.isLoggedIn?
                    <div style={{"display":"flex","alignItems":"center"}}>
                        <NavLink onClick={checkMenu} className="signupbtn" to="/user/profile"> <p className="">Hey, Suman</p></NavLink>
                        <p onClick={()=>checkMenu}> <span className="roundbtn loginbtn">Logout</span></p>
                    </div>:
                    <div style={{"display":"flex","alignItems":"center"}}>
                    <NavLink onClick={checkMenu} className="signupbtn" to="/signup"> <p className="">Signup</p></NavLink>
                    <NavLink onClick={checkMenu} to="/login"> <p className="roundbtn loginbtn">Login</p></NavLink>
                    </div>
                    }

                    
                    </div>

                    </div>
       )}
                   
            </div>
        </>
    )
}

export default Header
