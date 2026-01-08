const Legacy = () => {
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

      <div className="min-h-screen bg-[#F9F9F8] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 font-sans pt-8 sm:pt-24 md:pt-32">
        
        <div className="max-w-7xl mx-auto relative" style={{ minHeight: '600px' }}>
          
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start relative z-10 mt-8 sm:mt-16 md:mt-24">
            
            {/* Top Left - REVELS'26 Content */}
            <div className="flex flex-col space-y-0 sm:space-y-6 relative z-20">
              <h1 className="hidden sm:block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif-display font-bold text-black tracking-tight relative z-30 -mb-6 ml-6">
                REVELS'26
              </h1>
              {/* Mobile-only logo (top block) */}
            <div className="flex justify-center sm:hidden relative z-30">
              <img
                src="/assets/legacy/logo.png"
                alt="Revels Logo"
                className="w-24 -mb-6"
              />
            </div>


              {/* Text Box */}
              <div className="bg-[#E8E3D5] rounded-[30px] p-6 md:p-8 shadow-sm relative z-20" id="top-box">
                <p className="text-sm md:text-base leading-relaxed font-inter">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>

            {/* Top Right - Logo Emblem */}
            <div className="hidden sm:flex items-center justify-center">
              <div className="w-44 md:w-52 lg:w-56">
                <img 
                  src="/assets/legacy/logo.png" 
                  alt="Revels Logo"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Dotted Line - Connecting top-left text box to bottom-right text box */}
          <div className="hidden sm:block absolute top-[50%] left-0 right-0 z-0 pointer-events-none" style={{ 
            height: '400px',
            transform: 'translateY(-50%)'
          }}>
            <div className="relative w-full h-full">
              <img 
                src="/assets/legacy/DottedLine.png" 
                alt=""
                className="absolute w-full h-full object-contain"
                loading="lazy"
                style={{ 
                  left: '0%',
                //   right: '%',
                  width: '95%',
                  height: '100%'
                }}
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start relative z-10 mt-16 md:mt-24">
            
            {/* Bottom Left - MAHE Emblem */}
            {/* Mobile-only logo (bottom block) */}
            <div className="flex justify-center sm:hidden relative z-30">
              <img
                src="/assets/legacy/mahe.png"
                alt="MAHE Emblem"
                className="w-20 -mb-6"
              />
            </div>

            <div className="hidden sm:flex items-center justify-center order-2 lg:order-1">
              <div className="w-40 md:w-44 lg:w-48 mr-16">
                <img 
                  src="/assets/legacy/mahe.png" 
                  alt="MAHE Emblem"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Bottom Right - OUR LEGACY Content */}
            <div className="flex flex-col space-y-6 order-1 lg:order-2 relative z-20">
              <h1 className="hidden sm:block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif-display font-bold text-black tracking-tight relative z-30 -mb-6">
                OUR LEGACY
              </h1>
              
              {/* Text Box */}
              <div className="bg-[#B0C5CE] rounded-[30px] p-6 md:p-8 shadow-sm relative z-20 lg:-ml-12 xl:-ml-16" id="bottom-box">
                <p className="text-sm md:text-base text-black leading-relaxed font-inter">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Legacy;

