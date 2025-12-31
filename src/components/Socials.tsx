import { useState, useEffect } from 'react'
import blobImage from '/assets/socials/blob.png'
import carouselImage from '/assets/socials/Image Carousel.png'

const Socials = () => {
  const [carouselWidth, setCarouselWidth] = useState(800)

  useEffect(() => {
    const updateWidth = () => {
      const viewportWidth = window.innerWidth
      if (viewportWidth >= 1536) {
        setCarouselWidth(Math.min(1200, viewportWidth - 100))
      } else if (viewportWidth >= 1280) {
        setCarouselWidth(Math.min(1100, viewportWidth - 100))
      } else if (viewportWidth >= 1024) {
        setCarouselWidth(Math.min(1000, viewportWidth - 100))
      } else if (viewportWidth >= 768) {
        setCarouselWidth(Math.min(1300, viewportWidth - 100))
      } else {
        setCarouselWidth(Math.min(800, viewportWidth - 40))
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Infant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          .font-serif-display { font-family: 'Cormorant Infant', serif; }
          .font-inter { font-family: 'Inter', sans-serif; }
          .carousel-image {
            width: 900px !important;
            height: auto;
          }
          @media (min-width: 768px) {
            .carousel-image {
              width: 1500px !important;
            }
          }
          @media (min-width: 1024px) {
            .carousel-image {
              width: 1100px !important;
            }
          }
          @media (min-width: 1280px) {
            .carousel-image {
              width: 1200px !important;
            }
          }
          @media (min-width: 1536px) {
            .carousel-image {
              width: 1300px !important;
            }
          }
        `}
      </style>
      <section className="relative w-full py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 bg-[#F9F9F7] overflow-x-hidden">
        <div className="max-w-7xl mx-auto relative">
          {/* Main Content Container */}
          <div className="relative flex items-center justify-center">
            {/* Blob Background with Image Carousel */}
            <div className="relative w-full max-w-5xl mx-auto mt-24 md:mt-28">
              {/* Heading - Overlapping the blob (half on top, half outside) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-center w-full">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif-display font-[600] italic text-black mb-1">
                  What's Trending
                </h2>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif-display font-[600] text-black">
                  ON SOCIALS
                </h3>
              </div>

              {/* Blob Shape - Independent size */}
              <div className="relative z-0">
                <img 
                  src={blobImage} 
                  alt="" 
                  className="w-full h-auto object-contain max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto"
                />
              </div>
            </div>
            
            {/* Image Carousel - Completely independent size and position, separate from blob */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" 
              style={{ marginTop: '150px' }}
            >
              <img 
                src={carouselImage} 
                alt="Social media highlights" 
                className="object-contain"
                style={{ 
                  width: `${carouselWidth}px`,
                  height: 'auto',
                  maxWidth: '100vw',
                  display: 'block'
                }}
              />
            </div>

          </div>

          {/* Bottom Section - Follow Revels MIT */}
          <div className="text-center mt-16 md:mt-20 relative z-30">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif-display font-[600] text-black mb-4 md:mb-6">
              Follow Revels MIT
            </h3>
            <div className="flex items-center justify-center gap-6 md:gap-8 flex-wrap">
              <a 
                href="https://youtube.com/@revelsmit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-base md:text-lg font-inter font-normal text-black hover:opacity-70 transition-opacity"
              >
                YouTube
              </a>
              <a 
                href="https://instagram.com/revelsmit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-base md:text-lg font-inter font-normal text-black hover:opacity-70 transition-opacity"
              >
                Instagram
              </a>
              <a 
                href="https://twitter.com/revelsmit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-base md:text-lg font-inter font-normal text-black hover:opacity-70 transition-opacity"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* REVELS Text - Rotated 90 degrees to left, attached to right edge of viewport */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 z-20 hidden lg:block pointer-events-none"
          style={{ right: '-21rem' }}
        >
          <h4 
            className="text-8xl lg:text-9xl xl:text-[12rem] 2xl:text-[14rem] font-serif-display font-bold text-[#C5D4D9] leading-none"
            style={{ 
              transform: 'rotate(-90deg)',
              transformOrigin: 'center',
              letterSpacing: '0.1em',
              whiteSpace: 'nowrap'
            }}
          >
            REVELS
          </h4>
        </div>
      </section>
    </>
  )
}

export default Socials

