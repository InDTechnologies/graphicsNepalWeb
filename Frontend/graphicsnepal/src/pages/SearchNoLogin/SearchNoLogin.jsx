import React from 'react'
import {useParams} from "react-router-dom"

function SearchNoLogin() {
    const {srhQuery} = useParams()
    return (
        <div>
            {srhQuery}
        </div>
    )
}

export default SearchNoLogin
