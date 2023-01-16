import React from 'react'
import { useNavigate } from 'react-router-dom'

const Aboutpage = () => {
    const navigate = useNavigate()

    const goToHomepage = () => {
        navigate("/")
        // 함수안에서 이용할거라면 네비게이트
        //그냥 바로 이동할거면 링크로
    }
    return (
        <div>Aboutpage
            <button onClick={goToHomepage}>Homepage로 이동</button>
        </div>
    )
}

export default Aboutpage