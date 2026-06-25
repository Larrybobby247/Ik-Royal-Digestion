import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

import Img1 from '../assets/img1.jpg'
import Img2 from '../assets/img2.jpg'
import Img3 from '../assets/img7.jpg'
import Img4 from '../assets/img8.jpg'
import Img5 from '../assets/img9.jpg'
import Img6 from '../assets/img10.jpg'

const galleryImages = [
  { src: Img1, caption: 'Hotel Exterior & Secure Parking Lot' },
  { src: Img2, caption: 'Sparkling Blue Swimming Pool Area' },
  { src: Img3, caption: 'Cozy Indoor Bar and Cocktail Lounge' },
  { src: Img4, caption: 'Gourmet Restaurant Dining Hall Layout' },
  { src: Img5, caption: 'Executive Bathroom with Modern Fittings' },
  { src: Img6, caption: 'Lush Outdoor Seating Area' },
]

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  useScrollReveal()

  const openLightbox = (index) => {
    setCurrentImage(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section id="gallery" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Gallery</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">Explore Our <span className="text-gradient-gold">Spaces</span></h2>
        </div>
        <div className="masonry-grid">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="masonry-item gallery-item rounded-2xl overflow-hidden cursor-pointer reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
              <div className="gallery-overlay absolute inset-0 bg-midnight/60 flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-expand text-gold text-2xl mb-2"></i>
                  <p className="text-sm font-display">{img.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-midnight/95 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && closeLightbox()}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-ivory/70 hover:text-gold text-3xl transition-colors"
          >
            <i className="fas fa-times"></i>
          </button>
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-ivory/70 hover:text-gold text-3xl transition-colors"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-ivory/70 hover:text-gold text-3xl transition-colors"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          <img
            src={galleryImages[currentImage].src}
            alt={galleryImages[currentImage].caption}
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl"
          />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-ivory font-display">
            {galleryImages[currentImage].caption}
          </p>
        </div>
      )}
    </section>
  )
}

export default Gallery
