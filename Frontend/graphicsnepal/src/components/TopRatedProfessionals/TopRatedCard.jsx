import React from 'react'
import "./TopRatedCard.css"
import {NavLink} from 'react-router-dom'

const TopRatedCard = ({offer}) => {
    return (
        <div className="offerCard">
             <NavLink to="/"><img src={offer.img} alt="offer img detail" /></NavLink>
             <NavLink to="/"> <h3>{offer.title}</h3></NavLink>
        </div>
    )
}

export default TopRatedCard
