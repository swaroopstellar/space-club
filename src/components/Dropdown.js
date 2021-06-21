import React from 'react'
import {Link} from "react-router-dom"

const Dropdown = ({isSmall,toggle}) => {
    return (
        <div className={isSmall ? 'grid grid-rows-4 text-center items-center bg-indigo-800 text-indigo-100' : 'hidden'}
        onClick={toggle}>
           <Link className="p-4" to="/">Home</Link>
           <Link className="p-4" to="/Items">Items</Link>
           <Link className="p-4" to="/About">About</Link>
           <Link className="p-4" to="/Contact">Contact</Link>  
        </div>
    )
}

export default Dropdown
