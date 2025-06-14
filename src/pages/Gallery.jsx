import React, { useState } from 'react'

const galleryItems = [
  {
    id: 1,
    type: 'video',
    src: '/media/v1.mp4'
  },
  
]

const Gallery = () => {
  const [activeItem, setActiveItem] = useState(null)

  const handleClose = () => setActiveItem(null)

  return (
    <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {galleryItems.map(item => (
        <div
          key={item.id}
          className="relative overflow-hidden rounded-lg cursor-pointer group"
          onClick={() => setActiveItem(item)}
        >
          {item.type === 'image' ? (
            <img
              src={item.src}
              alt=""
              className="w-full h-40 object-cover transform group-hover:scale-105 transition duration-300"
            />
          ) : (
            <video
              src={item.src}
              className="w-full h-40 object-cover transform group-hover:scale-105 transition duration-300"
              muted
              playsInline
            />
          )}
        </div>
      ))}

      {/* Fullscreen Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
          >
            &times;
          </button>

          {activeItem.type === 'image' ? (
            <img
              src={activeItem.src}
              alt=""
              className="max-w-full max-h-full object-contain"
            />
          ) : (
            <video
              src={activeItem.src}
              controls
              autoPlay
              className="max-w-full max-h-full"
            />
          )}
        </div>
      )}
    </div>
  )
}

export default Gallery
