import React from 'react'
import {Link} from "react-router-dom"

const Feed = () => {
    return (
        <div className="bg-blue-200 flex h-screen flex-col items-center justify-center">
            <h1 className="lg:text-9xl md:text-7xl sm:text-5xl font-sans text-3xl font-bold mb-14 text-blue-800">Space Club</h1>
            <Link className="py-6 px-10 bg-indigo-500 text-indigo-100 rounded-full text-3xl hover:bg-indigo-700 transition duration-300 ease-in-out flex items-center animate-bounce ">
            Order Now
            <svg className="w-6 h-6 ml-4" fill="none" 
            stroke="currentColor" viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" 
            strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </Link>
        </div>

    )
}

export default Feed
