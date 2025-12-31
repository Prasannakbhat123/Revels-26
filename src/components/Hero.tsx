import bgImage from '/assets/bg.avif'
import logoImage from '/assets/good-logo.svg'
import CategoriesSlider from './CategoriesSlider'

const Hero = () => {
  return (
    <main className="flex-1 relative flex items-center justify-center min-h-screen w-full overflow-hidden">
      {/* Background Image - Full screen */}
      <div 
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh'
        }}
      />

      {/* Hands - Placeholder areas for hand images */}
      {/* Replace these divs with actual hand images when available */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Top-left hand - reaching down and right */}
        <div className="absolute top-[-5%] left-[-5%] w-80 h-80 md:w-96 md:h-96">
          <div className="w-full h-full relative">
            {/* Hand placeholder - replace with actual hand image */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200/40 via-gray-300/30 to-transparent rounded-full blur-2xl transform rotate-45 translate-x-8 translate-y-8"></div>
            {/* TODO: Replace with <img src="/path/to/top-hand.png" alt="" className="w-full h-full object-contain" /> */}
          </div>
        </div>
        
        {/* Bottom-right hand - reaching up and left */}
        <div className="absolute bottom-[-5%] right-[-5%] w-80 h-80 md:w-96 md:h-96">
          <div className="w-full h-full relative">
            {/* Hand placeholder - replace with actual hand image */}
            <div className="absolute inset-0 bg-gradient-to-tl from-gray-200/40 via-gray-300/30 to-transparent rounded-full blur-2xl transform -rotate-45 -translate-x-8 -translate-y-8"></div>
            {/* TODO: Replace with <img src="/path/to/bottom-hand.png" alt="" className="w-full h-full object-contain" /> */}
          </div>
        </div>
      </div>

      {/* Central Content */}
      <div className="absolute inset-0 z-30 flex items-center justify-center">
        {/* <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-[#414141] font-light mb-4 leading-tight">
          NIRVAAH
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-serif text-[#414141] italic mb-1">
          India's largest student-run
        </p>
        <p className="text-lg md:text-xl lg:text-2xl font-serif text-[#414141] italic">
          cultural & sports festival
        </p> */}
        <img 
          src={logoImage} 
          alt="Logo" 
          className="max-w-[95%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[65%] h-auto max-h-[85vh] w-auto"
        />
      </div>

      {/* Categories Slider */}
      <CategoriesSlider />
    </main>
  )
}

export default Hero

