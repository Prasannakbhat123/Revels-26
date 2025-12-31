const Loader = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Infant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
          .font-serif-display { font-family: 'Cormorant Infant', serif; }
          
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}
      </style>
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FDFBF7]/95 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-6">
          {/* Spinning circle loader */}
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#2F515B] border-r-[#2F515B] animate-spin"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-b-[#7B8386] border-l-[#7B8386] animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
          </div>
          
          {/* Text */}
          <p className="text-xl md:text-2xl font-serif-display font-semibold text-[#2F515B] animate-pulse">
            REVELS'26
          </p>
        </div>
      </div>
    </>
  )
}

export default Loader

