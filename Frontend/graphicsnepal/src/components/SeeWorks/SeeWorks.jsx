import React,{useState} from 'react'
import Masonry from 'react-masonry-css'
import { NavLink } from 'react-router-dom'
import './SeeWorks.css'



const SeeWorks = () => {


  const[category,setCategory]=useState({
    all:true,
    design:false,
    photo:false
  })


     const myImages = [
       {
         img:"https://images.unsplash.com/photo-1619278471894-f178e6883d96?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=691&q=80",
         type:"photo"
       },
       {
        img:"https://images.unsplash.com/photo-1611088497892-bba49c2de49c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        type:"photo"
      },
      {
        img:"https://images.unsplash.com/photo-1558655146-d09347e92766?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80",
        type:"design"
      },
      {
        img:"https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
        type:"design"
      },
      {
        img:"https://images.unsplash.com/photo-1524169358666-79f22534bc6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        type:"photo"
      },
      {
        img:"https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        type:"design"
      },
      {
        img:"https://images.unsplash.com/photo-1622266926096-8ba60d5534cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
        type:"photo"
      },
      {
        img:"https://images.unsplash.com/photo-1622486019091-89ac6488891c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80",
        type:"photo"
      },
      {
        img:"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        type:"design"
      },
      {
        img:"https://images.unsplash.com/photo-1622534662913-f787901e3a3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
        type:"design"
      }
     ]


    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        
      };

      const all = function(){
        document.documentElement.style.setProperty('--slider', '0');
        document.querySelector(".all").classList.add("activeSee")
        document.querySelector(".photo").classList.remove("activeSee")
        document.querySelector(".design").classList.remove("activeSee")

        setCategory({
          all:true,
          photo:false,
          design:false
        })
      }


      const photograph=()=>{
        if(window.innerWidth<400){
          document.documentElement.style.setProperty('--slider', '32%');
        }
        else if(window.innerWidth<500){
          document.documentElement.style.setProperty('--slider', '26%');
        }
        else if(window.innerWidth<700){
          document.documentElement.style.setProperty('--slider', '17%');
        }
        else if(window.innerWidth<900){
          document.documentElement.style.setProperty('--slider', '13%');
        }
        else{
          document.documentElement.style.setProperty('--slider', '8%');
        }

        document.querySelector(".all").classList.remove("activeSee")
        document.querySelector(".photo").classList.add("activeSee")
        document.querySelector(".design").classList.remove("activeSee")

        setCategory({
          all:false,
          photo:true,
          design:false
        })

      }

      const design=()=>{

        if(window.innerWidth<400){
          document.documentElement.style.setProperty('--slider', '71%');
        }
        else if(window.innerWidth<500){
          document.documentElement.style.setProperty('--slider', '54%');
        }
        else if(window.innerWidth<700){
          document.documentElement.style.setProperty('--slider', '38%');
        }
        else if(window.innerWidth<900){
          document.documentElement.style.setProperty('--slider', '29%');
        }
              else if(window.innerWidth<1119){
                document.documentElement.style.setProperty('--slider', '26%');
              }
              
              else if(window.innerWidth<1200){
                document.documentElement.style.setProperty('--slider', '28%');
              }
              else if(window.innerWidth<1300){
                document.documentElement.style.setProperty('--slider', '23%');
              }

        else{
          document.documentElement.style.setProperty('--slider', '18%');
        }
       
        document.querySelector(".all").classList.remove("activeSee")
        document.querySelector(".photo").classList.remove("activeSee")
        document.querySelector(".design").classList.add("activeSee")

        setCategory({
          all:false,
          photo:false,
          design:true
        })

      }

    return (
<div className="see_works">

<h2>See beauty through photos</h2>

<div className="options">

    <p className="activeSee pTag all" onClick={all}>All</p>
    <p className="pTag photo" onClick={photograph}>Photographs</p>
    <p className="pTag design" onClick={design}>Designs</p>
</div>

<Masonry
  breakpointCols={breakpointColumnsObj}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column"
>
  


      {
        category.all?(
          myImages.map((x)=>{
            return(
              <div className="grow" key={x.img}> <NavLink to="/"><img src={x.img} alt="img and design"/></NavLink> </div>
           )
          })
        ): category.design?(
          myImages.map((x)=>{
            if(x.type==="design"){
               return(
              <div className="grow" key={x.img}><NavLink to="/"><img src={x.img} alt="img and design"/></NavLink></div>
           )
          
            } else{
             return null
           }
           
          })
        ): myImages.map((x)=>{
          if(x.type==="photo"){
             return(
            <div className="grow" key={x.img}><NavLink to="/"><img src={x.img} alt="img and design"/></NavLink></div>
         )
          }
          else{
            return null
          }
         
        })
      }
      

</Masonry>


<div className="seeMore">
  <NavLink to="/"><h2>View More <i className="fas fa-chevron-right"></i></h2></NavLink>
</div>
       
   
      </div>
    )
}

export default SeeWorks
