import React from 'react'
import img1 from '../assets/images/products/p1-fullcoverage.jpg';
import img2 from '../assets/images/products/p2-frontcoverage.jpg';
import img3 from '../assets/images/products/p3-bumper.jpg';

export const Services = () => {
    

const imageBoxes = [
  { id: 1, imageUrl: img1, alt: "Image 1" },
  { id: 2, imageUrl: img2, alt: "Image 1" },
  { id: 3, imageUrl: img3, alt: "Image 1" }
]

  return (
    <>
    <div className='bg-black text-white'>
        <h1 className='p-5 text-[clamp(1.2rem,2.5vw,2rem)] font-bold text-center'>Our Services</h1>
    </div>
    <div className="flex flex-wrap gap-4 justify-center bg-black pb-15">
      {imageBoxes.map((box) => (
        <div
          key={box.id}
          className="flex min-w-[250px] max-w-[600px] h-[400px] bg-white p-3 shadow rounded transition-transform duration-300 transform hover:scale-105"
        >
          <img
            src={box.imageUrl}
            alt={box.alt}
            className="w-full rounded  h-[370px] object-cover "
          />
        </div>
      ))}
    </div>
    </>
  )
}

export default Services