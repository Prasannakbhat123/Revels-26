import { useState } from 'react'
import headerImage from '/assets/proshow/header.jpg'
import comingSoonImage from '/assets/proshow/coming_soon.jpg'
import vector1 from '/assets/card/vector1.png'
import vector2Proshow from '/assets/proshow/vector2.png'
import vector3 from '/assets/card/vector3.png'
import firstImage from '/assets/proshow/first.png'
import secondImage from '/assets/proshow/second.png'
import thirdImage from '/assets/proshow/third.png'

// Feature flag to show coming soon page
export const SHOW_COMING_SOON = true // Set to false to show the actual proshow page

const Proshow = () => {
  const [email, setEmail] = useState('')

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    console.log('Email submitted:', email)
    setEmail('')
  }

  // Coming Soon Page
  if (SHOW_COMING_SOON) {
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
        
        <div className="relative min-h-screen w-full">
          {/* Background Image */}
          <div className="fixed inset-0 z-0">
            <img 
              src={comingSoonImage} 
              alt="Coming Soon Background" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 min-h-screen flex flex-col">
            {/* Main Text Content - Centered */}
            <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
              <div className="text-center">
                <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif-display font-semibold italic text-white mb-2 md:mb-4">
                  Coming Soon
                </h2>
                <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-10xl font-serif-display font-bold text-white">
                  PROSHOW
                </h1>
              </div>
            </div>

            {/* Email Subscription Form - Bottom Center */}
            <div className="pb-12 md:pb-16 lg:pb-20 flex justify-center px-4">
              <form onSubmit={handleEmailSubmit} className="flex items-center gap-3 max-w-md w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="flex-1 px-6 py-3 rounded-full text-base font-inter text-black placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-black text-white rounded-full text-base font-inter font-medium hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Notify me
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }

  // Current Proshow Page with Events
  const events = [
    {
      id: 1,
      name: 'RAFTAAR',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
      venue: 'MIT Football Ground',
      date: '29th March | 6:00pm',
      vector: vector1,
      vectorColor: '#F08080', // Light coral/pink
      image: firstImage
    },
    {
      id: 2,
      name: 'WEEKND',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
      venue: 'MIT Football Ground',
      date: '29th March | 8:00pm',
      vector: vector2Proshow,
      vectorColor: '#A8C5E8', // Light blue
      image: secondImage
    },
    {
      id: 3,
      name: 'KANYE WEST',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
      venue: 'MIT Football Ground',
      date: '29th March | 10:00pm',
      vector: vector3,
      vectorColor: '#A8C5A8', // Light green/sage
      image: thirdImage
    }
  ]

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
      
      <div className="min-h-screen bg-[#F9F9F7]">
        {/* Header Image */}
        <div className="relative w-full mb-10">
          <div 
            className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden"
            style={{
              boxShadow: '0 4px 40px 10px rgba(0, 0, 0, 0.25)'
            }}
          >
            <img 
              src={headerImage} 
              alt="Proshow Header" 
              className="w-full h-full object-cover"
            />
            {/* Overlay text - positioned at bottom */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pb-2 md:pb-4 lg:pb-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif-display font-bold text-white">
                PROSHOW
              </h1>
            </div>
          </div>
        </div>

        {/* Events Section */}
        <div className="py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
            {events.map((event, index) => {
              // Vector positions: RAFTAAR (right), WEEKND (left), KANYE WEST (right)
              const vectorOnRight = index === 0 || index === 2
              
              return (
              <div 
                key={event.id} 
                className={`relative h-[400px] md:h-[450px] flex overflow-visible ${
                  !vectorOnRight ? 'flex-row-reverse' : ''
                }`}
              >
                {/* Vector Edge */}
                <div className="relative shrink-0 z-10">
                  <img 
                    src={event.vector} 
                    alt=""
                    className="h-full w-auto object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Content Area */}
                <div 
                  className={`flex-1 relative flex bg-[#F9F9F7] ${
                    vectorOnRight ? 'overflow-hidden' : 'overflow-visible'
                  }`}
                  style={{ 
                    borderTop: '1px solid black',
                    borderBottom: '1px solid black',
                    borderRight: '1px solid black',
                    borderLeft: vectorOnRight ? 'none' : '1px solid black',
                    borderTopRightRadius: vectorOnRight ? '14px' : '0',
                    borderBottomRightRadius: vectorOnRight ? '14px' : '0',
                    borderTopLeftRadius: !vectorOnRight ? '14px' : '0',
                    borderBottomLeftRadius: !vectorOnRight ? '14px' : '0'
                  }}
                >
                  {/* Content Text */}
                  <div 
                    className={`relative flex flex-col justify-center px-6 md:px-8 lg:px-10 py-6 z-20 ${
                      !vectorOnRight ? 'ml-auto' : ''
                    }`}
                    style={{ minWidth: '300px', maxWidth: '500px' }}
                  >
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif-display font-bold text-black mb-4 md:mb-6 tracking-tight">
                      {event.name}
                    </h3>
                    <p className="text-sm md:text-base text-black mb-6 md:mb-8 leading-relaxed font-inter">
                      {event.description}
                    </p>
                    <div className="space-y-2 font-inter text-sm md:text-base text-black">
                      <p className="font-medium">{event.venue}</p>
                      <p className="font-medium">{event.date}</p>
                    </div>
                  </div>

                  {/* Decorative Image */}
                  <div 
                    className={`absolute top-0 bottom-0 flex items-center overflow-hidden ${
                      vectorOnRight ? 'right-0' : 'left-0'
                    }`}
                    style={{ 
                      width: 'auto',
                      borderTopRightRadius: vectorOnRight ? '14px' : '0',
                      borderBottomRightRadius: vectorOnRight ? '14px' : '0',
                      borderTopLeftRadius: !vectorOnRight ? '14px' : '0',
                      borderBottomLeftRadius: !vectorOnRight ? '14px' : '0'
                    }}
                  >
                    <img 
                      src={event.image} 
                      alt={event.name}
                      className="h-full w-auto object-cover"
                      loading="lazy"
                      style={{
                        borderTopRightRadius: vectorOnRight ? '14px' : '0',
                        borderBottomRightRadius: vectorOnRight ? '14px' : '0',
                        borderTopLeftRadius: !vectorOnRight ? '14px' : '0',
                        borderBottomLeftRadius: !vectorOnRight ? '14px' : '0'
                      }}
                    />
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Proshow

