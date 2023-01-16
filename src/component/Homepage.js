import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigate = useNavigate()

    const goProductPage = () => {
        navigate('/products?q=pants')
    }
    return (
        <div>Homepage
            <Link to="/about">Aboutpage로 이동</Link>
            <button onClick={goProductPage}>go to products page</button>
        </div>
    )
}

export default Homepage