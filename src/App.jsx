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


function App() {
  const [count, setCount] = useState(0)

  return (
    < ><div className='min-h-screen bg-black w-full'>
    <Background />
    <Navbar />
    <Home />
    <div className='bg-black'>
      <Features />
      <OurTeam />
      <Pricing />
      <CustomerFeedback />
      <GetInTouch />
      <Footer />
    </div>
  </div>
    </>


    
  )
}
export default App
