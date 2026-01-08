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

      <div className="min-h-screen bg-[#FDFBF7] py-6 px-4 sm:px-6 lg:px-12 xl:px-20 font-sans">

      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-2xl sm:text-3xl md:text-4xl font-serif-display font-[700] italic text-black">
          Show your Support
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-display font-bold uppercase">
          Merchandise
        </h1>
      </div>

      {/* Card */}
      <div className="relative mx-auto w-full max-w-7xl rounded-2xl bg-[#EEECE4] px-6 py-8 sm:px-10 sm:py-12">

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 items-center">

          {/* Image Section */}
          <div className="flex flex-col items-center gap-3">
            <img
              src={images[selectedImage as keyof typeof images]}
              alt="Revels'26 Merchandise"
              className="w-full max-w-xs sm:max-w-sm object-contain"
            />

            {/* Thumbnails */}
            <div className="flex gap-3">
              {(['tshirt', 'back'] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedImage(key)}
                  className={`border-2 rounded-lg transition ${
                    selectedImage === key
                      ? 'border-[#827263] scale-105'
                      : 'border-transparent opacity-70'
                  }`}
                >
                  <img
                    src={images[key]}
                    className="w-12 h-12 sm:w-14 sm:h-14 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-serif-display italic font-semibold">
              Revels'26 Merch
            </h2>

            <p className="text-base sm:text-lg font-inter leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="px-8 py-3 rounded-lg bg-[#827263] text-white font-semibold">
                Buy Merch
              </button>
              <button className="px-8 py-3 rounded-lg border-2 border-[#827263] text-[#827263] font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Tree – hidden on mobile */}
        <div className="hidden md:block absolute -bottom-10 -right-20 w-64 opacity-80 pointer-events-none">
          <img src="/assets/merchandise/tree.png" className="w-full h-auto" />
        </div>

      </div>
    </div>

    </>
  );
};

export default Merchandise;

