import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // First item open by default

  const faqItems: FAQItem[] = [
    {
      question: "Where do ticket sales go?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
    },
    {
      question: "Can Non-MAHE Students Participate?",
      answer: "Yes, non-MAHE students can participate in Revels. The festival welcomes students from all institutions to join in the cultural and sports events."
    },
    {
      question: "Who organizes Revels?",
      answer: "Revels is organized by the students of Manipal Institute of Technology, Manipal, under the Academy of Higher Education (MAHE)."
    },
    {
      question: "Where will the ProShow be held?",
      answer: "The ProShow will be held at the main auditorium of Manipal Institute of Technology, Manipal. Detailed venue information will be provided closer to the event date."
    }
  ]

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
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
      <section className="relative w-full py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 bg-[#F9F9F7]">
        <div className="max-w-4xl mx-auto">
          {/* Title - Overlapping the card */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif-display font-[600] italic text-black relative z-30 -mb-6 md:-mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          {/* FAQ Card */}
          <div className="bg-[#C5D4D9] rounded-4xl p-6 md:p-8 lg:p-10 pt-12 md:pt-14 lg:pt-16 shadow-lg">

            {/* FAQ Items */}
            <div className="space-y-0">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index
                return (
                  <div key={index}>
                    {/* FAQ Item */}
                    <div className="py-4 md:py-5">
                      <div className="flex items-start justify-between gap-4">
                        {/* Question and Answer */}
                        <div className="flex-1">
                          <h3 className="text-base md:text-lg font-inter font-normal text-black mb-2">
                            {item.question}
                          </h3>
                          {isOpen && (
                            <p className="text-sm md:text-base font-inter font-normal text-black leading-relaxed mt-2">
                              {item.answer}
                            </p>
                          )}
                        </div>

                        {/* Toggle Icon */}
                        <button
                          onClick={() => toggleItem(index)}
                          className={`shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full border border-black flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer ${
                            isOpen 
                              ? 'bg-white' 
                              : ''
                          }`}
                          style={!isOpen ? { backgroundColor: '#2F515BB2' } : {}}
                          aria-label={isOpen ? "Collapse" : "Expand"}
                        >
                          {isOpen ? (
                            <svg
                              className="w-4 h-4 md:w-5 md:h-5 text-black"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20 12H4"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-4 h-4 md:w-5 md:h-5 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Separator Line */}
                    {index < faqItems.length - 1 && (
                      <div className="h-px bg-gray-300"></div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ

