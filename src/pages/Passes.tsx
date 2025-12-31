const Passes = () => {
    const colors = {
      flagship: { strip: '#EA9B92', button: '#EDC1BF' },
      general: { strip: '#A8BFE8', button: '#C6D7F8' },
      proshow: { strip: '#A8C5A8', button: '#BED0C3' },
    };
  
    return (
      <>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&display=swap');
            .font-serif-display { font-family: 'Playfair Display', serif; }
            
            /* Ensure proper image positioning */
            .card-image-container {
              position: absolute;
              right: 0;
              top: 50%;
              transform: translateY(-50%);
              height: 85%;
              width: auto;
              pointer-events: none;
              z-index: 10;
            }
            
            .card-image-container img {
              height: 100%;
              width: auto;
              object-fit: contain;
              object-position: center right;
            }
            
            @media (max-width: 768px) {
              .card-image-container {
                height: 70%;
                right: -10px;
              }
            }
            
            @media (max-width: 480px) {
              .card-image-container {
                height: 60%;
                right: -15px;
              }
            }
          `}
        </style>
  
        <div className="min-h-screen bg-[#FDFBF7] py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 font-sans">
          
          {/* Container with background rectangle covering full height */}
          <div className="relative w-full min-h-[600px]">
            {/* Header Section - on top of background */}
            <div className="text-center mb-12 md:mb-16 mt-4 md:mt-8 relative z-20" id="header-section">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-display italic text-black mb-2">
                Dive into the fest
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-display font-bold text-black tracking-tight uppercase">
                Get Your Passes
              </h1>
            </div>

            {/* Background rectangle with semicircle - starts from bottom of heading */}
            <div className="absolute left-1/2 -translate-x-1/2 w-[85%] max-w-5xl rounded-2xl" style={{ 
              backgroundColor: '#EEECE4',
              top: '100px',
              bottom: '0'
            }}>
              {/* Semicircle at top center - bigger and different color */}
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-48 h-24 rounded-t-full" style={{ backgroundColor: '#FF7E7E7A' }}></div>
            </div>

            {/* Cards Container - on top of background */}
            <div className="max-w-7xl mx-auto space-y-6 md:space-y-8 overflow-visible relative z-10 pb-8">
            
            {/* Grid for Top Two Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              
              {/* === FLAGSHIP CARD === */}
              <div className="relative h-[280px] sm:h-[300px] md:h-[320px] flex overflow-visible">
                
                {/* LEFT: Scalloped edge image */}
                <div className="relative shrink-0 z-10">
                  <img 
                    src="/assets/card/vector1.png" 
                    alt=""
                    className="h-full w-auto object-contain"
                    loading="lazy"
                  />
                </div>
  
                {/* MIDDLE & RIGHT: Content area with background and image */}
                <div className="flex-1 relative flex overflow-hidden border-t border-r border-b border-black" style={{ backgroundColor: '#F9F9F7', borderTopRightRadius: '14px', borderBottomRightRadius: '14px' }}>
                  {/* Content text and button */}
                  <div className="relative flex flex-col justify-center px-2 md:px-4 lg:px-6 py-6 z-20" style={{ minWidth: '280px' }}>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-black mb-4 md:mb-5 tracking-tight">
                      FLAGSHIP
                    </h3>
                    <p className="text-sm text-black mb-6 md:mb-8 leading-relaxed font-medium max-w-[280px]">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                    </p>
                    <button 
                      className="px-16 py-2.5 text-black rounded-full text-sm font-semibold border-[1.5px] border-black transition-all hover:scale-105 active:scale-95 w-fit cursor-pointer"
                      style={{ backgroundColor: colors.flagship.button }}
                    >
                      Buy Pass
                    </button>
                  </div>
  
                  {/* RIGHT: Decorative image filling full height with rounded corners */}
                  <div className="absolute right-0 top-0 bottom-0 flex items-center justify-end overflow-hidden" style={{ 
                    width: 'auto',
                    borderTopRightRadius: '14px',
                    borderBottomRightRadius: '14px'
                  }}>
                    <img 
                      src="/assets/card/1.png" 
                      alt="Decorative floral element"
                      className="h-full w-auto object-cover"
                      loading="lazy"
                      style={{
                        borderTopRightRadius: '14px',
                        borderBottomRightRadius: '14px'
                      }}
                    />
                  </div>
                </div>
              </div>
  
              {/* === GENERAL CARD === */}
              <div className="relative h-[280px] sm:h-[300px] md:h-[320px] flex overflow-visible">
                
                {/* LEFT: Scalloped edge image */}
                <div className="relative shrink-0 z-10">
                  <img 
                    src="/assets/card/vector2.png" 
                    alt=""
                    className="h-full w-auto object-contain"
                    loading="lazy"
                  />
                </div>
  
                {/* MIDDLE & RIGHT: Content area with background and image */}
                <div className="flex-1 relative flex overflow-hidden border-t border-r border-b border-black" style={{ backgroundColor: '#F9F9F7', borderTopRightRadius: '14px', borderBottomRightRadius: '14px' }}>
                  {/* Content text and button */}
                  <div className="relative flex flex-col justify-center px-6 md:px-8 lg:px-10 py-6 z-20" style={{ minWidth: '280px' }}>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-black mb-4 md:mb-5 tracking-tight">
                      GENERAL
                    </h3>
                    <p className="text-sm text-black mb-6 md:mb-8 leading-relaxed font-medium max-w-[280px]">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                    </p>
                    <button 
                      className="px-16 py-2.5 text-black rounded-full text-sm font-semibold border-[1.5px] border-black transition-all hover:scale-105 active:scale-95 w-fit cursor-pointer"
                      style={{ backgroundColor: colors.general.button }}
                    >
                      Buy Pass
                    </button>
                  </div>
  
                  {/* RIGHT: Decorative image filling full height with rounded corners */}
                  <div className="absolute right-0 top-0 bottom-0 flex items-center justify-end overflow-hidden" style={{ 
                    width: 'auto',
                    borderTopRightRadius: '14px',
                    borderBottomRightRadius: '14px'
                  }}>
                    <img 
                      src="/assets/card/2.png" 
                      alt="Decorative cloud element"
                      className="h-full w-auto object-cover"
                      loading="lazy"
                      style={{
                        borderTopRightRadius: '14px',
                        borderBottomRightRadius: '14px'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
  
            {/* === PRO SHOW CARD (Same width as top two) === */}
            <div className="flex justify-center">
              <div className="relative h-[280px] sm:h-[300px] md:h-[320px] flex overflow-visible w-full lg:w-[calc((100%-32px)/2)]">
                
                {/* LEFT: Scalloped edge image */}
                <div className="relative shrink-0 z-10">
                  <img 
                    src="/assets/card/vector3.png" 
                    alt=""
                    className="h-full w-auto object-contain"
                    loading="lazy"
                  />
                </div>
  
                {/* MIDDLE & RIGHT: Content area with background and image */}
                <div className="flex-1 relative flex overflow-hidden border-t border-r border-b border-black" style={{ backgroundColor: '#F9F9F7', borderTopRightRadius: '14px', borderBottomRightRadius: '14px' }}>
                  {/* Content text and button */}
                  <div className="relative flex flex-col justify-center px-6 md:px-8 lg:px-10 py-6 z-20" style={{ minWidth: '280px' }}>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-black mb-4 md:mb-5 tracking-tight">
                      PRO SHOW
                    </h3>
                    <p className="text-sm text-black mb-6 md:mb-8 leading-relaxed font-medium max-w-md mr-12">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <button 
                      className="px-16 py-2.5 text-black rounded-full text-sm font-semibold border-[1.5px] border-black transition-all hover:scale-105 active:scale-95 w-fit cursor-pointer"
                      style={{ backgroundColor: colors.proshow.button }}
                    >
                      Buy Pass
                    </button>
                  </div>
  
                  {/* RIGHT: Decorative image filling full height with rounded corners */}
                  <div className="absolute right-0 top-0 bottom-0 flex items-center justify-end overflow-hidden" style={{ 
                    width: 'auto',
                    borderTopRightRadius: '14px',
                    borderBottomRightRadius: '14px'
                  }}>
                    <img 
                      src="/assets/card/3.png" 
                      alt="Decorative forest element"
                      className="h-full w-auto object-cover"
                      loading="lazy"
                      style={{
                        borderTopRightRadius: '14px',
                        borderBottomRightRadius: '14px'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Passes;
  