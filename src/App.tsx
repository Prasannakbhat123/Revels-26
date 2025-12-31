import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Passes from './pages/Passes'
import Combo from './pages/Combo'
import Merchandise from './pages/Merchandise'
import Legacy from './pages/Legacy'
import FAQ from './components/FAQ'
import Socials from './components/Socials'
import Footer from './components/Footer'
import Proshow, { SHOW_COMING_SOON } from './pages/Proshow'
import NotFound from './pages/NotFound'
import Loader from './components/Loader'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const checkRoute = () => {
      const validPages = ['home', 'passes', 'events', 'proshow', 'contact']
      const pathname = window.location.pathname
      const hash = window.location.hash.slice(1)
      
      // Check if pathname is not root
      if (pathname !== '/' && pathname !== '') {
        // Extract page from pathname (e.g., /proshow -> proshow)
        const pathPage = pathname.slice(1).toLowerCase()
        if (validPages.includes(pathPage)) {
          setCurrentPage(pathPage)
          // Update hash to match
          window.location.hash = pathPage === 'home' ? '' : pathPage
        } else {
          // Invalid path - show 404
          setCurrentPage('404')
        }
      } else if (hash && validPages.includes(hash)) {
        // Valid hash route
        setCurrentPage(hash)
      } else if (hash && !validPages.includes(hash)) {
        // Invalid hash route - show 404
        setCurrentPage('404')
      } else {
        // Default to home
        setCurrentPage('home')
      }
    }

    checkRoute()
    
    // Listen for popstate (back/forward button)
    window.addEventListener('popstate', checkRoute)
    // Listen for hash changes
    window.addEventListener('hashchange', checkRoute)
    
    return () => {
      window.removeEventListener('popstate', checkRoute)
      window.removeEventListener('hashchange', checkRoute)
    }
  }, [])

  const handleNavigate = (page: string) => {
    // Don't show loader if navigating to the same page
    if (page === currentPage) return
    
    const validPages = ['home', 'passes', 'events', 'proshow', 'contact']
    
    // Show loader
    setIsLoading(true)
    
    // Hide loader after a short delay to allow page transition
    setTimeout(() => {
      if (validPages.includes(page)) {
        setCurrentPage(page)
        // Update both pathname and hash
        if (page === 'home') {
          window.history.pushState({}, '', '/')
          window.location.hash = ''
        } else {
          window.history.pushState({}, '', `/${page}`)
          window.location.hash = page
        }
      } else {
        setCurrentPage('404')
        window.history.pushState({}, '', '/404')
      }
      
      // Hide loader after page change
      setTimeout(() => {
        setIsLoading(false)
      }, 300)
    }, 200)
  }

  // If on 404 page, render NotFound with Header
  if (currentPage === '404') {
    return (
      <div className="min-h-screen flex flex-col relative w-full">
        {isLoading && <Loader />}
        <Header activePage="404" onNavigate={handleNavigate} />
        <NotFound />
      </div>
    )
  }

  // If on Proshow page, render only Proshow with Header and Footer (only if not coming soon)
  if (currentPage === 'proshow') {
    return (
      <div className="min-h-screen flex flex-col relative w-full">
        {isLoading && <Loader />}
        <div className="relative">
          <Header activePage="proshow" onNavigate={handleNavigate} />
          <Proshow />
        </div>
        {!SHOW_COMING_SOON && <Footer hideRulebookTimetable={true} />}
      </div>
    )
  }

  // Default home page with all sections
  return (
    <div className="min-h-screen flex flex-col relative w-full">
      {isLoading && <Loader />}
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <Hero />
        <Header activePage={currentPage} onNavigate={handleNavigate} />
      </div>
      
      {/* Passes Section */}
      <div className="relative">
        <Passes />
      </div>

      {/* Combo Section */}
      <div className="relative">
        <Combo />
      </div>

      {/* Merchandise Section */}
      <div className="relative">
        <Merchandise />
      </div>

      {/* Legacy Section */}
      <div className="relative">
        <Legacy />
      </div>

      {/* FAQ Section */}
      <div className="relative">
        <FAQ />
      </div>

      {/* Socials Section */}
      <div className="relative">
        <Socials />
      </div>

      {/* Footer Section */}
      <div className="relative">
        <Footer />
      </div>
    </div>
  )
}

export default App
