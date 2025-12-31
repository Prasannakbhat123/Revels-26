import { useState } from 'react'

const Merchandise = () => {
  const [selectedImage, setSelectedImage] = useState('tshirt')
  
  const images = {
    tshirt: '/assets/merchandise/tshirt.png',
    back: '/assets/merchandise/back.png'
  }

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Infant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          .font-serif-display { font-family: 'Cormorant Infant', serif; }
          .font-inter { font-family: 'Inter', sans-serif; }
        `}
      </style>

      <div className="min-h-screen bg-[#FDFBF7] py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 font-sans pb-32 md:pb-40 overflow-visible">
        
        {/* Container with background rectangle covering full height */}
        <div className="relative w-full min-h-[520px] overflow-visible" style={{ paddingBottom: '10rem' }}>
          {/* Background rectangle with semicircle - positioned first */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[90%] max-w-7xl rounded-2xl overflow-visible" style={{ 
            backgroundColor: '#EEECE4',
            top: '120px',
            bottom: '2rem',
            minHeight: '520px'
          }}>
            {/* Semicircle at top center */}
            {/* <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-48 h-24 rounded-t-full" style={{ backgroundColor: '#BDCFC2' }}></div> */}

            {/* Content inside rectangle */}
            <div className="p-7 md:p-10 lg:p-12 pb-10 md:pb-12 lg:pb-14 relative z-10 overflow-visible">
              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] items-center">
                
                {/* Left Side - T-shirt Image with Thumbnails */}
                <div className="flex flex-col items-center justify-center lg:justify-end lg:pr-2 gap-1">
                  {/* Main Image */}
                  <div className="w-full max-w-sm">
                    <img 
                      src={images[selectedImage as keyof typeof images]} 
                      alt="Revels'26 Merchandise"
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Thumbnails */}
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={() => setSelectedImage('tshirt')}
                      className={`rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        selectedImage === 'tshirt' 
                          ? 'border-[#827263] scale-105' 
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img 
                        src="/assets/merchandise/tshirt.png" 
                        alt="T-shirt front"
                        className="w-12 h-12 md:w-16 md:h-16 object-cover"
                        loading="lazy"
                      />
                    </button>
                    <button
                      onClick={() => setSelectedImage('back')}
                      className={`rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        selectedImage === 'back' 
                          ? 'border-[#827263] scale-105' 
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img 
                        src="/assets/merchandise/back.png" 
                        alt="T-shirt back"
                        className="w-12 h-12 md:w-16 md:h-16 object-cover"
                        loading="lazy"
                      />
                    </button>
                  </div>
                </div>

                {/* Right Side - Text and Buttons */}
                <div className="flex flex-col space-y-5 relative lg:pl-2">
                  
                  {/* Title */}
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-[600] italic text-black">
                    Revels'26 Merch
                  </h2>

                  {/* Description */}
                  <p className="text-md md:text-lg text-black leading-relaxed font-inter">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type more.
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-2">
                    <button className="px-12 py-3 text-white rounded-lg text-sm font-inter font-semibold hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap" style={{ backgroundColor: '#827263' }}>
                      Buy Merch
                    </button>
                    <button className="px-12 py-3 bg-[#EEECE4] border-2 rounded-lg text-sm font-inter font-semibold hover:opacity-80 transition-opacity cursor-pointer whitespace-nowrap" style={{ borderColor: '#827263', color: '#827263' }}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative Tree - Bottom Right, extending outside rectangle */}
              <div className="absolute opacity-80 z-0" style={{ 
                width: '280px', 
                height: '280px',
                bottom: '-20px',
                right: '-100px'
              }}>
                <img 
                  src="/assets/merchandise/tree.png" 
                  alt=""
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Header Section - on top of background and semicircle */}
          <div className="text-center relative z-20" style={{ marginTop: '3.5rem', paddingTop: '2rem', marginBottom: '3rem' }}>
            <p className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-[700] italic text-black mb-2">
              Show your Support
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-display font-bold text-black tracking-tight uppercase relative inline-block">
              MERCHANDISE
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Merchandise;

