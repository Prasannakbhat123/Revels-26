// Example of how to use the Passes page in App.tsx
// You can switch between pages by commenting/uncommenting

import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
// import Passes from './pages/Passes'

function App() {
  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-hidden">
      {/* Home Page */}
      <Hero />
      <Header />

      {/* Passes Page - Uncomment to view */}
      {/* <div className="relative">
        <Header />
        <Passes />
      </div> */}
    </div>
  )
}

export default App







