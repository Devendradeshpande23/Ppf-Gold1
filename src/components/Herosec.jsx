import React from 'react'
import heroimg from '../assets/images/background/bg-2.jpg'
const Herosec = () => {
    return (
        <div>
            <div className=' pt-[5.7vw] bg-black relative' >
                <img src={heroimg} className=' w-full opacity-50 h-[calc(100vh-5.7vw)] object-cover' alt="hero-image" />
                <div className="absolute inset-0 flex flex-col justify-center  bg-opacity-50 text-white px-4   ">
                    <h1 className=' text-[clamp(3.0rem,2.5vw,2rem)] font-bold '>HANDLE THE ROAD WITH PROTECTION, <br /> PERFORMANCE AND STYLE
                    </h1>
                    
                </div>
            </div>
        </div>
    )
}

export default Herosec