const CategoriesSlider = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full bg-[#1E6D55] py-4 z-20">
      <div className="px-6 md:px-12 overflow-hidden">
        {/* Scrolling categories */}
        <div className="flex animate-scroll whitespace-nowrap">
          <p className="text-[#B0C5CE] text-xl md:text-2xl font-serif tracking-wide inline-block">
            MUSIC • ART • DANCE • SPORTS • CULTURE • MUSIC • ART • DANCE • SPORTS • CULTURE • MUSIC • ART • DANCE • SPORTS • CULTURE • 
          </p>
          <p className="text-[#B0C5CE] text-xl md:text-2xl font-serif tracking-wide inline-block ml-8">
            MUSIC • ART • DANCE • SPORTS • CULTURE • MUSIC • ART • DANCE • SPORTS • CULTURE • MUSIC • ART • DANCE • SPORTS • CULTURE • 
          </p>
        </div>
      </div>
    </div>
  )
}

export default CategoriesSlider


