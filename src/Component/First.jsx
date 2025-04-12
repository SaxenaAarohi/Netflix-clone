import React, { useState } from 'react'
import Navbar from './Navbar';
import bg from '../assets/bg.jpg';
import logo from '../assets/Netflix-logo.png';
import { useNavigate } from 'react-router-dom';
const First = () => {
  const [inpval, setInput] = useState("");
  const navigate = useNavigate();
  function tomodal(){
    navigate('/modal')
  }
  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };
  function tosignin() {
    if (!validateEmail(inpval))
      alert("not valid")
    else {
      navigate(`/signin/${inpval}`)
    }

  }
  return (
    <div className=" relative m-0 p-0 h-screen bg-no-repeat bg-cover " style={{ backgroundImage: `url(${bg})` }}>\
      <div className='flex   justify-between'>
        <div className='h-[300ox] w-[300px] ml-[400px] '>
          <img src={`${logo}`} />
        </div>
        <div className=' flex text-white  text-4xl gap-10  mt-7  '>
       <button className='rounded-md bg-red-600 text-white h-20 w-40 text-[30px] font-bold  mr-[400px] pl-4 pr-4' onClick={tomodal}>Sign in</button>
        </div>
      </div>
      <div className="flex justify-center items-center h-[80%]">
        <div>
          <p className='text-center text-white font-bold text-9xl'>Unlimited movies,<br /> TV shows and more</p>
          <p className='text-white text-center text-6xl pt-20'>Starts at ₹149. Cancel at any time.</p>
          <p className='text-white text-center text-4xl pt-20'>Ready to watch? Enter your email to create or restart your membership.</p>
          <input type='email' placeholder='Email address' className='placeholder:text-5xl text-white pt-8 pb-8 pl-8 text-5xl w-[60%] mt-10 bg-black/30 border border-white ' onChange={(e) => { setInput(e.target.value) }}></input>
          <button className='rounded-md bg-red-600 text-white text-5xl ml-10 w-[35%] p-8 mt-10' onClick={tosignin}>Get Staarted</button>

        </div>
      </div>

    </div>
  )
}

export default First
