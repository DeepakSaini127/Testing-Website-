import React from 'react'
import Navbar from './Portfolio/Navbar.jsx'
import Hero from './Portfolio/hero.jsx'
import About from './Portfolio/about.jsx'
import Services from './Portfolio/services.jsx'
import Mywork from './Portfolio/mywork.jsx'
import Contact from './Portfolio/contact.jsx'
import { FaArrowUpLong } from "react-icons/fa6";
import AnchorLink from 'react-anchor-link-smooth-scroll'



function App() {
  return (
    <div className='w-full w-auto bg-zinc-900 text-white'>
      <div className=' fixed right-10 bottom-10 w-16 h-16 rounded-full cursor-pointer transform duration-300 ease-in-out flex justify-center items-center bg-zinc-800 hover:bg-gradient-to-l from-[#DA7C25] to-[#b923e1]'><AnchorLink offset={50} href='#navbar'><FaArrowUpLong  className='text-3xl'/></AnchorLink></div>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Mywork />
        <Contact />

    </div>
  )
}

export default App
