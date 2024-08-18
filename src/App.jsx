import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Project from './components/Project'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      {/* Background divs */}
      <div className="fixed top-0 left-0 h-full w-full -z-10 bg-neutral-950"></div>
      <div className="fixed top-0 left-0 h-full w-full z-[-9] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="relative container mx-auto px-8">
        <Navbar />
        <Hero />
        <About /> 
        <Technologies /> 
        <Experience/> 
        <Project/>  
        <Contact/>
      </div>
    </div>
  )
}

export default App
