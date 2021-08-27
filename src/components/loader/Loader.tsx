import React from 'react'
import './loader.css'
const Myloader = ({text}: any) => {
    return (
        <div className="loader">
        <h1>{text}</h1>
        <span></span>
        <span></span>
        <span></span>
    </div>
    )
}

export default Myloader
