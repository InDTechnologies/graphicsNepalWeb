import React from 'react'
import {NavLink} from 'react-router-dom'
import "./TopRated.css"
import TopRatedCard from './TopRatedCard'


const TopRated = () => {

    return (
        <div className="top_rated">

            <section className="top_header">
            <h2>Top rated professionals</h2>
            <NavLink to="/"><p>See More</p></NavLink>
            </section>

             <div className="myCustom">
                <div>
                <TopRatedCard offer={{img:"https://images.unsplash.com/photo-1612810806695-30f7a8258391?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",title:"Logo design at Rs. 999"}}/>
                </div>

                <div>
                <TopRatedCard offer={{img:"https://images.unsplash.com/photo-1542744094-3a31f272c490?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",title:"Web design within 3 days"}}/>
                </div>

                <div>
                <TopRatedCard offer={{img:"https://images.unsplash.com/photo-1603901985879-887f435c7d4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",title:"Get visiting card for your business "}}/>
                </div>

                <div>
                <TopRatedCard offer={{img:"https://images.unsplash.com/photo-1559661184-5abf47a433a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80",title:"Photoghapher for 1 day event at Rs. 20000"}}/>
                </div>

                <div>
                <TopRatedCard offer={{img:"https://images.unsplash.com/photo-1603901985879-887f435c7d4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",title:"Get visiting card for your business "}}/>
                </div>
             </div>

        
        </div>
    )
}

export default TopRated
