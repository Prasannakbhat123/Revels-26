const Combo = () => {
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

      <div className="min-h-screen bg-[#FDFBF7] py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 font-sans">
        
        {/* Container with background rectangle covering full height */}
        <div className="relative w-full min-h-[600px]">
          {/* Background rectangle with semicircle - positioned first */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[85%] max-w-5xl rounded-2xl" style={{ 
            backgroundColor: '#EEECE4',
            top: '100px',
            bottom: '0'
          }}>
            {/* Semicircle at top center - bigger and different color */}
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-48 h-24 rounded-t-full" style={{ backgroundColor: '#BDCFC2' }}></div>
          </div>

          {/* Header Section - on top of background and semicircle */}
          <div className="text-center mb-8 md:mb-10 relative z-20 mt-4 md:mt-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-display font-bold italic text-black tracking-tight uppercase relative inline-block">
              Combo Deals
            </h1>
          </div>

          {/* Cards Container - on top of background */}
          <div className="max-w-7xl mx-auto space-y-6 md:space-y-8 overflow-visible relative z-10 pb-8">
            {/* Two cards with middle image */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-center">
              
              {/* Left Card - PROSHOW & MERCH */}
              <div className="relative bg-[#B7D0C1] rounded-2xl overflow-visible shadow-lg" style={{ maxWidth: '320px', margin: '0 auto', minHeight: '520px' }}>
                {/* Image at top */}
                <div className="w-full h-48 overflow-hidden rounded-t-2xl">
                  <img 
                    src="/assets/combo/first.jpg" 
                    alt="Performance"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex flex-col h-[calc(100%-192px)]">
                  <h3 className="text-2xl md:text-3xl font-serif-display font-bold text-black">
                    PROSHOW & MERCH
                  </h3>
                  <p className="text-sm text-black leading-relaxed font-medium font-inter">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type more.
                  </p>
                  
                  {/* Dashed perforated line with circular punch holes */}
                  <div className="relative my-4">
                    <div className="border-t-2 border-dashed border-black/30"></div>
                    {/* Circular punch holes - half inside, half outside - positioned at card edges (accounting for p-6 padding) */}
                    <div className="absolute left-0 top-0 -translate-y-1/2 w-10 h-10 bg-[#FDFBF7] rounded-full" style={{ left: 'calc(-1.5rem - 20px)' }}></div>
                    <div className="absolute right-0 top-0 -translate-y-1/2 w-10 h-10 bg-[#EDECE5] rounded-full" style={{ right: 'calc(-1.5rem - 20px)' }}></div>
                  </div>
                  
                  {/* Button */}
                  <button className="w-full text-white rounded-lg py-3 px-6 font-inter font-semibold hover:opacity-90 transition-opacity cursor-pointer mt-auto" style={{ backgroundColor: '#2F515B' }}>
                    Buy Pass
                  </button>
                </div>
              </div>

              {/* Middle Image - touching bottom of rectangle */}
              <div className="relative flex items-end justify-center lg:col-span-1 h-full" style={{ minHeight: '520px' }}>
                <img 
                  src="/assets/combo/middle.png" 
                  alt="Waterfall"
                  className="w-full h-auto max-w-[280px] object-contain"
                  loading="lazy"
                />
              </div>

              {/* Right Card - FLAGSHIP & MERCH */}
              <div className="relative bg-[#B7D0C1] rounded-2xl overflow-visible shadow-lg" style={{ maxWidth: '320px', margin: '0 auto', minHeight: '520px' }}>
                {/* Image at top */}
                <div className="w-full h-48 overflow-hidden rounded-t-2xl">
                  <img 
                    src="/assets/combo/second.jpg" 
                    alt="Performance"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex flex-col h-[calc(100%-192px)]">
                  <h3 className="text-2xl md:text-3xl font-serif-display font-bold text-black">
                    FLAGSHIP & MERCH
                  </h3>
                  <p className="text-sm text-black leading-relaxed font-medium font-inter">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type more.
                  </p>
                  
                  {/* Dashed perforated line with circular punch holes */}
                  <div className="relative my-4">
                    <div className="border-t-2 border-dashed border-black/30"></div>
                    {/* Circular punch holes - half inside, half outside - positioned at card edges (accounting for p-6 padding) */}
                    <div className="absolute left-0 top-0 -translate-y-1/2 w-10 h-10 bg-[#EDECE5] rounded-full" style={{ left: 'calc(-1.5rem - 20px)' }}></div>
                    <div className="absolute right-0 top-0 -translate-y-1/2 w-10 h-10 bg-[#FDFBF7] rounded-full" style={{ right: 'calc(-1.5rem - 20px)' }}></div>
                  </div>
                  
                  {/* Button */}
                  <button className="w-full text-white rounded-lg py-3 px-6 font-inter font-semibold hover:opacity-90 transition-opacity cursor-pointer mt-auto" style={{ backgroundColor: '#2F515B' }}>
                    Buy Pass
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Combo;

