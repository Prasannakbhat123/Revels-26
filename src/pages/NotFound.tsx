import headerImage from '/assets/404.png'

const NotFound = () => {
  // For non-router setup, we'll use window.location or a callback
  const handleGoHome = () => {
    window.location.hash = ''
    if (window.location.pathname !== '/') {
      window.location.href = '/'
    } else {
      window.location.reload()
    }
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
      
      <div 
        className="h-screen relative overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom, #EBDABE, #FFC27A7D, #3678637D)'
        }}
      >
        {/* Main Content - Centered accounting for navbar */}
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20" style={{ paddingTop: '100px' }}>
          <div className="relative w-full max-w-4xl">
            {/* Rounded Panel with Background Image */}
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '16/8' }}>
              {/* Background Image */}
              <img 
                src={headerImage} 
                alt="404 Landscape" 
                className="w-full h-full object-cover"
              />
              
              {/* 404 Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif-display font-bold text-white drop-shadow-2xl">
                  404
                </h1>
              </div>
            </div>

            {/* Back to Home Button */}
            <div className="flex justify-center mt-6 md:mt-8">
              <button
                onClick={handleGoHome}
                className="px-8 py-3 bg-gray-200 text-black rounded-full text-base md:text-lg font-inter font-medium hover:bg-gray-300 transition-colors cursor-pointer"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound

