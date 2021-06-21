import React from 'react';
import {Link} from "react-router-dom";

const Navbar = ({toggle}) => {
    return (
        <nav className="flex justify-between items-center h-16 bg-indigo-900 text-indigo-100 shadow-sm font-mono">
            <Link to="/" className="text-indigo-100 p-3 font-bold text-xl">GALAXY</Link>
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
            <svg className="w-6 h-6" 
            fill="none" stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link className="p-4" to="/">Home</Link>
                <Link className="p-4" to="/Items">Items</Link>
                <Link className="p-4" to="/About">About</Link>
                <Link className="p-4" to="/Contact">Contact</Link>
            </div>
            
        </nav>
    )
}

export default Navbar
