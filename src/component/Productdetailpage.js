import React from 'react'
import { useParams } from 'react-router-dom'

const Productdetailpage = () => {
    const { id } = useParams()
    console.log('ppp', id)
    return (
        <div>Productdetailpage
            <h1>Show Products detail{id}</h1>
        </div>
    )
}

export default Productdetailpage