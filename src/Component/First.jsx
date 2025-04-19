import React, { useState } from 'react'
import Navbar from './Navbar';
import bg from '../assets/bg.jpg';
import logo from '../assets/Netflix-logo.png';
import { useNavigate } from 'react-router-dom';

const First = () => {
  const [inpval, setInput] = useState("");
  const navigate = useNavigate();

  function tomodal() {
    navigate('/modal/signin')
  }

  return (
    <div
      className="relative h-screen w-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-6">
        <div className="w-32 md:w-48">
          <img src={logo} alt="Netflix logo" className="w-full" />
        </div>
        <button
          className="bg-red-600 text-white font-bold px-6 py-2 text-sm md:text-lg rounded-md"
          onClick={tomodal}
        >
          Sign In
        </button>
      </div>
      <div className="flex justify-center items-center h-[80%] px-4 md:px-0 text-center">
        <div className="max-w-4xl w-full">
          <h1 className="text-white font-bold text-6xl sm:text-7xl md:text-8xl lg:text-8xl leading-tight">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-white text-xl sm:text-2xl md:text-5xl pt-6">
            Starts at ₹149. Cancel at any time.
          </p>
          <p className="text-white text-lg sm:text-xl md:text-4xl pt-6">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full md:w-[60%] h-14 md:h-20 px-4 text-base md:text-2xl bg-black/40 border border-white placeholder-white rounded-md text-white"
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="bg-red-600 text-white text-lg md:text-3xl font-semibold px-6 py-5 rounded-md"
              onClick={tomodal}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default First
