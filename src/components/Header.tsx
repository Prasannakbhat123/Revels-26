interface HeaderProps {
  activePage?: string
  onNavigate?: (page: string) => void
}

const Header = ({ activePage = 'home', onNavigate }: HeaderProps) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate(page)
    } else {
      // Fallback to hash routing
      window.location.hash = page === 'home' ? '' : `#${page}`
      window.location.reload()
    }
  }

  return (
    <header className="absolute top-0 left-0 w-full px-6 md:px-12 py-6 flex items-center justify-between z-50 pointer-events-none">
      {/* Logo */}
      <div 
        className={`text-2xl md:text-3xl font-serif font-semibold tracking-tight cursor-pointer pointer-events-auto text-white`}
        onClick={() => onNavigate ? onNavigate('home') : (window.location.hash = '')}
      >
        REVELS'26
      </div>

      {/* Navigation - Single rounded bar with active page highlighted */}
      <nav className="hidden md:flex items-center rounded-full px-2 py-2 backdrop-blur-md pointer-events-auto" style={{ backgroundColor: 'rgba(123, 131, 134, 0.6)' }}>
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, 'home')}
          className={`px-5 py-2 rounded-full text-sm font-sans transition-colors cursor-pointer pointer-events-auto ${
            activePage === 'home' ? 'text-white' : 'text-white hover:opacity-80'
          }`}
          style={activePage === 'home' ? { backgroundColor: '#1B1B1B45' } : {}}
        >
          Home
        </a>
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, 'passes')}
          className={`px-5 py-2 rounded-full text-sm font-sans transition-colors cursor-pointer pointer-events-auto ${
            activePage === 'passes' ? 'text-white' : 'text-white hover:opacity-80'
          }`}
          style={activePage === 'passes' ? { backgroundColor: '#1B1B1B45' } : {}}
        >
          Passes
        </a>
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, 'events')}
          className={`px-5 py-2 rounded-full text-sm font-sans transition-colors cursor-pointer pointer-events-auto ${
            activePage === 'events' ? 'text-white' : 'text-white hover:opacity-80'
          }`}
          style={activePage === 'events' ? { backgroundColor: '#1B1B1B45' } : {}}
        >
          Events
        </a>
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, 'proshow')}
          className={`px-5 py-2 rounded-full text-sm font-sans transition-colors cursor-pointer pointer-events-auto ${
            activePage === 'proshow' ? 'text-white' : 'text-white hover:opacity-80'
          }`}
          style={activePage === 'proshow' ? { backgroundColor: '#1B1B1B45' } : {}}
        >
          Proshow
        </a>
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, 'contact')}
          className={`px-5 py-2 rounded-full text-sm font-sans transition-colors cursor-pointer pointer-events-auto ${
            activePage === 'contact' ? 'text-white' : 'text-white hover:opacity-80'
          }`}
          style={activePage === 'contact' ? { backgroundColor: '#1B1B1B45' } : {}}
        >
          Contact
        </a>
      </nav>

      {/* Register/Buy Tickets/Help & Support Button */}
      <button 
        className={`px-5 py-2 rounded-full text-sm font-sans transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2 pointer-events-auto ${
          activePage === 'proshow' 
            ? 'bg-white text-black hover:bg-gray-100' 
            : activePage === '404' || activePage === ''
            ? 'bg-black text-white hover:bg-gray-800'
            : 'bg-[#2F515B] text-white hover:bg-[#3d6572]'
        }`}
        onClick={() => {
          if (activePage === 'proshow') {
            // Different redirect for proshow - you can change this URL
            window.open('https://example.com/buy-proshow-tickets', '_blank')
          } else if (activePage === '404' || activePage === '') {
            // Help & Support redirect
            window.open('https://example.com/help-support', '_blank')
          } else {
            // Default redirect for home page
            window.open('https://example.com/register', '_blank')
          }
        }}
      >
        {activePage === 'proshow' ? 'Buy Tickets' : (activePage === '404' || activePage === '') ? 'Help & Support' : 'Register Now'}
        <svg className="w-4 h-4 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </header>
  )
}

export default Header

