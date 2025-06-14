import React, { useState } from 'react'

const productImages = Array.from({ length: 14 }, (_, i) => ({
  id: i + 1,
  src: `/media/pp${i + 1}.jpeg`,
}))

const Product = () => {
  const [activeImg, setActiveImg] = useState(null)

  return (
    <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {productImages.map((item) => (
        <div
          key={item.id}
          className="relative overflow-hidden rounded-lg cursor-pointer group"
          onClick={() => setActiveImg(item.src)}
        >
          <img
            src={item.src}
            alt={`Product ${item.id}`}
            className="w-full h-40 sm:h-48 object-cover transform transition duration-300 group-hover:scale-105"
          />
        </div>
      ))}

      {activeImg && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <button
            onClick={() => setActiveImg(null)}
            className="absolute top-4 right-4 text-white text-4xl font-bold z-50 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 transition"
            aria-label="Close"
          >
            &times;
          </button>
          <img
            src={activeImg}
            alt="Full Product"
            className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  )
}

export default Product
