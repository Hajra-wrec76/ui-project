import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OurTeam from './components/OurTeam'
import Pricing from './components/Pricing'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Background from './components/Background'
import CustomerFeedback from './components/CustomerFeedback'
import Features from './components/Features'
import Home from './components/Home'
// import Features from './components/Features'
import GetInTouch from './components/GetInTouch'
import Test from './components/test'


function App() {

  return (
    < >
    {/* <div className='w-full bg-black'>
    <Test/>
    </div> */}
    <div className='min-h-screen bg-black w-full'>
    <Background />
    <Navbar />
    <Home />
    <div className='bg-black'>
      <Features />
      <OurTeam />
      <Pricing />
      {/* <div className="absolute bottom-16 flex items-center justify-center ml-56 border-none bg-gradient-to-b from-gray-800 to-black rounded-full h-48 w-48 p-96"></div> */}
     
      <CustomerFeedback />
      <GetInTouch />
      <Footer />
    </div>
  </div>
    </>


    
  )
}
export default App
