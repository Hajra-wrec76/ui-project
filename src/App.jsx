import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import OurTeam from "./components/OurTeam";
import Pricing from "./components/Pricing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Background from "./components/Background";
import CustomerFeedback from "./components/CustomerFeedback";
import Features from "./components/Features";
import Home from "./components/Home";
// import Features from './components/Features'
import GetInTouch from "./components/GetInTouch";
import Test from "./components/test";

function App() {
  return (
    <>
      {/* <div className='w-full bg-black'>
    <Test/>
    </div> */}
      <div className="min-h-screen bg-black w-full">
        <Background />
        <Navbar />
        <Home />
        <div className="bg-black">
          <Features />
          <OurTeam />
          <Pricing />
          <div className="mt-10 md:max-lg:flex  text-white text-center mr-5 mb-4">
            <h6>People love it!</h6>
            <h1>Customer Feedback</h1>
          </div>

          <div className="  mt-absolute bottom-40 flex items-center justify-center ml-72 border-none bg-gradient-to-b from-gray-400	 to-black rounded-full h-28 w-28 p-72">
            <div className="content">
              <CustomerFeedback />
              <br />
              <br />
              <GetInTouch />
              <br />
              <br />
              <br />
              <br />
              
              
            </div>
          </div>
          <div className="py-12">
              <Footer />
              </div>
        </div>
      </div>
    </>
  );
}
export default App;
