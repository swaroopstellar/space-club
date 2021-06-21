import React from 'react'
import Imageone from "../components/images/image-1.jpg"
import Imagetwo from "../components/images/image-2.jpg"
import Imagethree from "../components/images/image-3.jpg"

const Content = () => {
    return (
        <div className="md:flex flex-row justify-between">
        <div className="menu-card">
            <img src={Imageone} alt="planet-lamp" className="h-full rounded-lg mb-10 cursor-pointer shadow"/>
            <div className="center-content">
                <h2 className="text-2xl mb-2 font-black">Glowing Moon Lamp</h2>
                <p className="text-xl mb-2 font-bold">Price : 20.5 $ </p>
            </div>
        </div>
        <div className="menu-card">
            <img src={Imagetwo} alt="planet-lamp" className="h-full rounded-lg mb-10 cursor-pointer shadow"/>
            <div className="center-content">
                <h2 className="text-2xl mb-2 font-black">Glowing Neptune</h2>
                <p className="text-xl mb-2 font-bold">Price : 32 $ </p>
            </div>
        </div>
        <div className="menu-card">
            <img src={Imagethree} alt="planet-lamp" className="h-full rounded-lg mb-10 cursor-pointer shadow"/>
            <div className="center-content">
                <h2 className="text-2xl mb-2 font-black">Glowing Planets</h2>
                <p className="text-xl mb-2 font-bold">Price : 45 $ </p>
            </div>
        </div>
        </div>
    )
}

export default Content
