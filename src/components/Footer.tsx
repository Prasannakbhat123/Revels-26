interface FooterProps {
  hideRulebookTimetable?: boolean
}

const Footer = ({ hideRulebookTimetable = false }: FooterProps) => {
  const handleDownload = (pdfPath: string, filename: string) => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
      <footer className="relative w-full bg-[#FDFBF7] py-12 md:py-16 overflow-visible" style={{ minHeight: '400px' }}>
      {/* Rulebook and Timetable Section */}
      {!hideRulebookTimetable && (
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 mb-12 md:mb-18">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Rulebook Box */}
          <div className="flex flex-col">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif-display font-bold text-black relative z-30 -mb-6 ml-4">
              RULEBOOK
            </h3>
            <div className="rounded-2xl p-6 md:p-8 flex flex-col h-full" style={{ backgroundColor: '#B1C5CEB8', minHeight: '200px' }}>
              <p className="text-sm md:text-base text-black font-inter leading-relaxed mb-6 flex-grow">
                Complete event guidelines, rules & regulations for Revels Nirvaah 2026.
              </p>
              <button
                onClick={() => handleDownload('/assets/footer/rules.pdf', 'rules.pdf')}
                className="flex items-center justify-center gap-2 px-6 py-3 text-white rounded-lg font-inter font-semibold hover:opacity-90 transition-opacity cursor-pointer self-start"
                style={{ backgroundColor: '#2F515B' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Rulebook
              </button>
            </div>
          </div>

          {/* Timetable Box */}
          <div className="flex flex-col">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif-display font-bold text-black relative z-30 -mb-6 ml-4">
              TIMETABLE
            </h3>
            <div className="rounded-2xl p-6 md:p-8 flex flex-col h-full" style={{ backgroundColor: '#B1C5CEB8', minHeight: '200px' }}>
              <p className="text-sm md:text-base text-black font-inter leading-relaxed mb-6 flex-grow">
                Download the timetable for Revels Nirvaah 2026.
              </p>
              <button
                onClick={() => handleDownload('/assets/footer/timetable.pdf', 'timetable.pdf')}
                className="flex items-center justify-center gap-2 px-6 py-3 text-white rounded-lg font-inter font-semibold hover:opacity-90 transition-opacity cursor-pointer self-start"
                style={{ backgroundColor: '#2F515B' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Timetable
              </button>
            </div>
          </div>
        </div>
      </div>
      )}
      {/* Left decorative image */}
      <div className="absolute bottom-0 left-0 z-0 pointer-events-none" style={{ width: '45%', maxWidth: '600px', height: 'auto' }}>
        <img 
          src="/assets/footer/left.png" 
          alt=""
          className="w-full h-auto"
          style={{ display: 'block' }}
          loading="lazy"
        />
      </div>

      {/* Right decorative image */}
      <div className="absolute bottom-0 right-0 z-0 pointer-events-none" style={{ width: '45%', maxWidth: '600px', height: 'auto' }}>
        <img 
          src="/assets/footer/right.png" 
          alt=""
          className="w-full h-auto"
          style={{ display: 'block' }}
          loading="lazy"
        />
      </div>

      {/* Central content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-8 pt-0">
        {/* Bird image */}
        <div className="mb-3 md:mb-4 ml-12 md:ml-16" style={{ width: '100px', height: 'auto' }}>
          <img 
            src="/assets/footer/bird.png" 
            alt=""
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>

        {/* NIRVAAH title */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif-display font-bold text-black mb-4 md:mb-6">
        REVELS'26
        </h2>

        {/* Address */}
        <div className="text-sm md:text-base text-black font-inter leading-relaxed space-y-1">
          <p>Manipal Institute of Technology, Manipal</p>
          <p>Academy of Higher Education (MAHE),</p>
          <p>Manipal, Karnataka 576104</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer


